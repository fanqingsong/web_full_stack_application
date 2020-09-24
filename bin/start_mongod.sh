
mkdir -p  /data/db

touch ./logs/mongod.log

nohup mongod >> ./logs/mongod.log 2>&1 &


