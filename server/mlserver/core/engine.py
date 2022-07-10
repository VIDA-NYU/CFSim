import json

## local imports
from core.counterfactualpredictor import CounterfactualPredictor

## serialization
from serialization.encoders import CounterfactualInstanceEnconder

class Engine:

    def __init__(self):
        
        ## counterfactual predictor range
        self.counterfactualPredictor = CounterfactualPredictor()


    def generate_counterfactual_set( self, params ):
        return json.dumps( self.counterfactualPredictor.get_counterfactual_set( queryinstance=params['queryinstance'], parameters=params['parameters'], constraints=params['constraints'] ), cls=CounterfactualInstanceEnconder )
