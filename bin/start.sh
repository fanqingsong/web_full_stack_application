

echo "starting mongod..."
./bin/start_mongod.sh &

sleep 2s

# start websocket server
echo "starting websocket server..."
./bin/start_websocket_server.sh &

sleep 5s

# start webservice restfull api server
# for scrapy data to DB
echo "starting restapi server..."
./bin/start_restapi.sh &

sleep 5s

# serve with hot reload at localhost:8080
echo "starting vue dev server..."
./bin/start_vuedev.sh

