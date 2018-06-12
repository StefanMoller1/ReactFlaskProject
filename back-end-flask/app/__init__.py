from flask import Flask, jsonify, request
from flask_cors import CORS
from .worker import api_prepair, logging

app = Flask(__name__)
CORS(app)

##########################################################
## NAME:		CATCH_ALL
## PARAMS: 		(PATH), 1
## AUTHOR: 		STEFAN
## DESCRIPTION:	CATCH ALL PARAMS AND SEND IT THROU TO THE
##				METHODS FILE
##########################################################
@app.route('/<path:path>',  methods=["GET","POST"])
def catch_api(path):
	data = request.data.decode('ascii') 
	service = api_prepair(path, data)
	return jsonify(service), 200

if __name__ is "__main__":
	app.run()