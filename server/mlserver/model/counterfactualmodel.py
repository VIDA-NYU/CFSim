import json

class CounterfactualModel:

    def __init__(self, id, model):

        self.id = id
        self.model = model


    def get_counterfactuals(self, queryInput, samplesize=10, constraints={}, features_to_vary=[]):

        if( len(features_to_vary) > 0 ):

            print('VARYING THIS FEATURES: ', features_to_vary)
            try:
                cfs = self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite", features_to_vary=features_to_vary )
                return json.loads(cfs.to_json())
            except:
                print('EXCEPT!!!!')
                return { 'test_data': [[[]]], 'cfs_list': [[]], 'feature_names': [] }

        else:
            cfs = self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite")
            return json.loads(cfs.to_json())
            # return self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite")

        #     return self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite", features_to_vary=features_to_vary )
        # 
