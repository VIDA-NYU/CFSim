import pandas as pd

# local imports
from ..config.constants import PATHCONSTS
from ..utils.histograms import HistogramGenerator

class CSVLoader:

    @staticmethod
    def load_dataframe( datasetName: str ) -> pd.DataFrame:

        ## defining the current dataset path
        currentDatasetPath: str = f'{ PATHCONSTS["DATASETSPATHCSV"].replace("DATASETNAME", datasetName) }'

        ## opening with pandas
        df = pd.read_csv(currentDatasetPath)

        return df

    @staticmethod
    def load_csv( datasetName: str ):

        ## defining the current dataset path
        currentDatasetPath: str = f'{ PATHCONSTS["DATASETSPATHCSV"].replace("DATASETNAME", datasetName) }'

        ## opening with pandas
        df = pd.read_csv(currentDatasetPath)

        histograms = HistogramGenerator.create_histogram( df )

        return {'features': df.columns.values, 'rows': df.values, 'predictions': [ 0, 1, 0, 0, 0, 1 ,1], 'histograms': histograms }