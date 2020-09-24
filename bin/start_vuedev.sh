

cd frontend

touch ../logs/dev_vue_runtime.log 
nohup npm run dev & >> ../logs/dev_vue_runtime.log 2>&1 &

cd -


