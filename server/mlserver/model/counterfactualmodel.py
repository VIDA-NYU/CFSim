class CounterfactualModel:

    def __init__(self, id, model):

        self.id = id
        self.model = model


    def get_counterfactuals(self, queryInput, samplesize=10, constraints={}):

        if( constraints ):
            print('WITH CONSTRAINTS')
            print(constraints)
            return self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite", permitted_range=constraints)
        print('WITHOUT CONSTRAINTS')
        return self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite")
