class CounterfactualModel:

    def __init__(self, id, model):

        self.id = id
        self.model = model


    def get_counterfactuals(self, queryInput, samplesize=10, constraints={}):

        if( constraints ):
            return self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite", permitted_range=constraints)
        return self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite")
