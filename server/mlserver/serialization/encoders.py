import json
import numpy as np

## model
from ..model.counterfactualinstance import CounterfactualInstance

class CounterfactualInstanceEnconder(json.JSONEncoder):

    def default(self, obj):

        if isinstance( obj, CounterfactualInstance ):
            return obj.featureInstances

        return obj.__dict__