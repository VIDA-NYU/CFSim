class CounterfactualModel:

    def __init__(self, id, model):

        self.id = id
        self.model = model


    def get_counterfactuals(self, queryInput):
        return self.model.generate_counterfactuals(queryInput, total_CFs=20, desired_class="opposite")
