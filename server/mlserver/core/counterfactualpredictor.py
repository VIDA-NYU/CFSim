## third-party imports
import pandas as pd
import glob
from joblib import load
import dice_ml
import json

## local imports
from model.counterfactualmodel import CounterfactualModel
from model.counterfactulainstance import CounterfactualInstance

class CounterfactualPredictor:

    def __init__(self):

        self.loadedCounterfactualModel = None
   
    def get_counterfactual_set( self, queryinstance, parameters ):


        ## parsing parameters
        model = parameters['modelname']
        sampleSize = parameters['samplesize']

        print("SAMPLE SIZE: ", sampleSize)

        if( self.loadedCounterfactualModel == None ):
            self.loadedCounterfactualModel = self._load_counterfactual_model()

        ## formatting query input
        queryInput = pd.read_json(json.dumps( [queryinstance] ), orient ='records')
        
        ## generating cfs
        cfs = self.loadedCounterfactualModel.get_counterfactuals(queryInput=queryInput, samplesize=sampleSize)
        cfs = json.loads(cfs.to_json())
        
        return {'counterfactuals': self._parse_conterfactuals( cfs )}


    def _parse_conterfactuals( self, counterfactualset ):

        featureNames = counterfactualset['feature_names']
        counterfactualInstances = counterfactualset['cfs_list'][0]
        queryInput = counterfactualset['test_data'][0][0]

        parsedCounterfactuals = []
        for cf in counterfactualInstances:

            currentCounterfactualInstance = []
            for featureIndex, featureName  in enumerate(featureNames):

                currentCF = CounterfactualInstance( 
                    featureName=featureName, 
                    oldValue=queryInput[featureIndex],
                    newValue=cf[featureIndex] )

                currentCounterfactualInstance.append( currentCF )

            parsedCounterfactuals.append(currentCounterfactualInstance)

        
        return parsedCounterfactuals


    def _load_counterfactual_model( self ):
        
        ## loading dataset
        df = pd.read_csv('../../data/raw/diabetes.csv')

        ## transforming pandas dataframe into Dice dataframe
        dice_data = dice_ml.Data(dataframe=df, continuous_features=df.drop(columns=['Outcome']).columns.tolist(), outcome_name='Outcome')

        ## loading model
        sklearn_model = load('../../models/classifiers/diabetes.sav')

        ## creating dice model
        dice_model = dice_ml.Model(model=sklearn_model, backend='sklearn')
        dice_exp = dice_ml.Dice(dice_data, dice_model)

        return CounterfactualModel( id='diabetes', model=dice_exp )