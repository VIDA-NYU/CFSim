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
        return json.dumps( self.counterfactualPredictor.get_counterfactual_set( queryinstance=params['queryinstance'], parameters=params['parameters'], constraints=params['constraints'] ), cls=CounterfactualInstanceEnconder )


    ## feature selection
    def generate_suggested_features( self, params ):
        return json.dumps( FeatureSelectors.select_next_features( 'diabetes', params['constraints'] ) )