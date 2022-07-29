import json
import glob

## local imports
from .counterfactualpredictor import CounterfactualPredictor
from .featureselectors import FeatureSelectors

## serialization
from ..serialization.encoders import CounterfactualInstanceEnconder



class Engine:

    def __init__(self):
        
        ## counterfactual predictor
        self.counterfactualPredictor = CounterfactualPredictor()


    ## counterfactual generation
    def generate_counterfactual_set( self, params ):

        cfs = self.counterfactualPredictor.get_counterfactual_set( queryinstance=params['queryinstance'], parameters=params['parameters'], constraints=params['constraints'] )

        featureVectors = []
        for cf in cfs['counterfactuals']:

            currentFeatureVector = list( map( lambda feature: feature.newValue, cf ) )
            featureVectors.append(currentFeatureVector)

        return json.dumps( cfs, cls=CounterfactualInstanceEnconder )


    ## feature selection
    def generate_suggested_features( self, params ):
        return json.dumps( FeatureSelectors.select_next_features( 'diabetes', params['constraints'] ) )