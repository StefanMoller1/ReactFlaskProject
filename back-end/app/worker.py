from . import methods as m
from flask import request

##########################################################
## NAME:		API_PREPAIR
## PARAMS: 		(PATH, DATA), 2
## AUTHOR: 		STEFAN
## DESCRIPTION:	GETS THE URL AND THE BINARY DATA FROM THE
##				FRONT END AND CALLS THE METHOD.
##########################################################
def api_prepair(path, data=None):
	call = path.split('/')
	server = call[1]
	method = call[2]
	if not data:
		call = 'm.{0}()'.format(method)
	else:
		call = 'm.{0}(**{1})'.format(method, data)
	
	try:
		return eval(call)
	except Exception as err:
		logging('ERROR',err)
		return {'error': str(err)}
	finally:
		print("API CALL COMPLETED")

##########################################################
## NAME:		TEST2
## PARAMS: 		(FUNCTION, DATA), 2
## AUTHOR: 		STEFAN
## DESCRIPTION:	PRINTING OUT THE INFORMATION DATA
##########################################################
def logging(function=None, data=None):
	print('*****'+function+'*******')
	print(data)
	print('*****'+function+'*******')