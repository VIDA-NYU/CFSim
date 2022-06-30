import json

## local imports
from datasource.datasetloader import DatasetLoader

class Engine:

    def __init__(self):
        pass

    def load_dataset( self ):
        return json.dumps(DatasetLoader.load_dataset('iris'))

    def get_available_datasets( self ):
        return json.dumps(DatasetLoader.get_available_datasets())


