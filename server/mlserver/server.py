from core.engine import Engine
from flask import Flask, request
from flask_cors import CORS ## remove in production

app = Flask(__name__)
cors = CORS(app) ## remove in production
app.config['CORS_HEADERS'] = 'Content-Type' ## remove in production

## API ENGINE
engine = None

@app.route('/generatecounterfactualset', methods=['POST'])
def generate_counterfactual_set():

    ## reading parameters
    requestParams = request.get_json()

    return engine.generate_counterfactual_set( requestParams )


if __name__ == '__main__':

    ## creating engine
    engine = Engine()

    ## Starting Server
    print('Server is online...')
    app.run(host='0.0.0.0', port=5001, debug=True)
