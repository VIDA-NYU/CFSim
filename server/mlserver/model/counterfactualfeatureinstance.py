class CounterfactualFeatureInstance:


    def __init__( self, featureName, oldValue, newValue ):

        self.featureName = featureName
        self.oldValue = oldValue
        self.newValue = newValue
        self.variation = newValue - oldValue