#! /bin/bash
# Created by Stefan Moller

while [ ! $# -eq 0 ];
do
    case "$1" in
        -h|--help)
                echo "	-h, --help				show this menu"
                echo "	-s,   					Start Servers"
                echo "	-l 						List active sessions"
                echo " 	-k 						Kill all screens"
				exit 0
				;;
		-s)
			cd back-end-express && screen -dmS EXPRESS-backend yarn start
			cd ../back-end-flask && screen -dmS FLASK-backend python run.py
			cd ../front-end-server && screen -dmS EXPRESS-front-end yarn start
			cd ../front-end && screen -dmS REACT-front-end yarn start
			break
			;;
		-l)
			screen -list
			echo "To open a session run \" screen -r [session] \" "
			break
			;;
		-k)
			pkill screen
			break
			;;
    esac
done
