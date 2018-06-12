############IMPORTS############
import json

#######################################################################################
## API METHODS
## FLASK SERVER
#######################################################################################

##########################################################
## NAME:		TEST1
## PARAMS: 		(), 0
## AUTHOR: 		STEFAN
## DESCRIPTION:	TESTING MY FIRST GET FUNCTION
##########################################################
def test1(*args, **kwargs):
	return {'status': 'complete'}

##########################################################
## NAME:		TEST2
## PARAMS: 		(NAME), 1
## AUTHOR: 		STEFAN
## DESCRIPTION:	TESTING MY FIRST POST FUNCTION
##########################################################
def test2(name):
	return {'user': name}


##########################################################
## NAME:		TEST
## PARAMS: 		(), 0
## AUTHOR: 		STEFAN
## DESCRIPTION:	TESTING ERROR GET FUNCTION
##########################################################
def test3(*args, **kwargs):
	a = 10/0
	return a
