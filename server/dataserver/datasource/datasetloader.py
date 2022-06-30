# libs
import pandas as pd
import glob
import os

class DatasetLoader:

    @staticmethod
    def load_dataset( datasetName: str ):
        return {'features': ['attr1', 'attr2', 'attr3', 'attr4', 'attr5'], 'rows': [[0, 1, 1, 2, 3], [0, 1, 1, 2, 3], [0, 1, 1, 2, 3], [0, 1, 1, 2, 3], [0, 1, 1, 2, 3], [0, 1, 1, 2, 3], [0, 1, 1, 2, 3]], 'predictions': [ 0, 1, 0, 0, 0, 1 ,1] }
        

    @staticmethod
    def get_available_datasets():

        availableDatasets = glob.glob('../../data/datasets/*')
        availableDatasets = list( map( lambda filename: os.path.basename(filename).split('.')[0], availableDatasets ))

        return { 'datasets': availableDatasets }     
     