

kill -9 $(pidof mongod)


for one_pid in `pidof node`; do
    echo "killing pid ${one_pid}"
    kill -9 ${one_pid};
done;


