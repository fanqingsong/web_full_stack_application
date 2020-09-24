


touch ./logs/websocket_server_quotes.log
nohup node backend/websocket_server_quotes.js >> ./logs/websocket_server_quotes.log 2>&1 &

touch ./logs/websocket_server_mock_data.log
nohup node backend/websocket_server_mock_data.js >> ./logs/websocket_server_mock_data.log 2>&1 &


