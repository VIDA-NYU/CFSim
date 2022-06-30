from core.engine import Engine
from flask import Flask, request
from flask_cors import CORS ## remove in production

app = Flask(__name__)
cors = CORS(app) ## remove in production
app.config['CORS_HEADERS'] = 'Content-Type' ## remove in production

## API ENGINE
engine = None

@app.route('/loaddataset', methods=['GET'])
def load_dataset():

    ## reading parameters
    requestParams = request.get_json()

    return engine.load_dataset()

@app.route('/getavailabledatasets', methods=['GET'])
def get_available_datasets():
    return engine.get_available_datasets()


if __name__ == '__main__':

    ## creating engine
    engine = Engine()

    ## Starting Server
    print('Server is online...')
    app.run(host='0.0.0.0', port=5000, debug=True)
