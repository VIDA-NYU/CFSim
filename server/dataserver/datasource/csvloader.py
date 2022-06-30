import pandas as pd

# local imports
from config.constants import PATHCONSTS

class CSVLoader:

    @staticmethod
    def load_csv( datasetName: str ):

        ## defining the current dataset path
        currentDatasetPath: str = f'{ PATHCONSTS["DATASETSPATHCSV"].replace("DATASETNAME", datasetName) }'

        ## opening with pandas
        df = pd.read_csv(currentDatasetPath)

        return {'features': df.columns.values, 'rows': df.values, 'predictions': [ 0, 1, 0, 0, 0, 1 ,1] }