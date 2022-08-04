class CounterfactualFeatureInstance:


    def __init__( self, featureName, oldValue, newValue ):

        print( '[', round(oldValue, 4), ' - ', round(newValue, 4), ']',  ' -> ', '[',oldValue, ' - ', newValue,  ']')


        self.featureName = featureName
        # self.oldValue = oldValue
        # self.newValue = newValue

        self.oldValue = round(oldValue, 4)
        self.newValue = round(newValue, 4)

        self.variation = round(newValue, 4) - round(oldValue, 4)