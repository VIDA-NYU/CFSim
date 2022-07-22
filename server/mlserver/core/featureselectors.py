## outside package imports
import glob
from dataserver.datasource.datasetloader import DatasetLoader
from mlserver.featureselection.cmi_featureselection import CMIFeatureSelection

class FeatureSelectors:

    @staticmethod
    def select_next_features( datasetname: str ):

        dataframe = DatasetLoader.load_dataframe( 'diabetes' )


        print(dataframe.head())


        return ['feature1', 'feature2']