import json
import numpy as np

class CounterfactualInstanceEnconder(json.JSONEncoder):

    def default(self, obj):
        return obj.__dict__