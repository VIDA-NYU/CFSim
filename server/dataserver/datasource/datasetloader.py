# libs
import pandas as pd
import glob
import os

# local imports
from datasource.csvloader import CSVLoader

class DatasetLoader:

    @staticmethod
    def load_dataset( datasetName: str ):
        return CSVLoader.load_csv( datasetName )

    @staticmethod
    def get_available_datasets():

        availableDatasets = glob.glob('../../data/datasets/*')
        availableDatasets = list( map( lambda filename: os.path.basename(filename).split('.')[0], availableDatasets ))

        return { 'datasets': availableDatasets }     
     