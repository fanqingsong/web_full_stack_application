FROM swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/node:14-bullseye

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com

COPY package.json package-lock.json ./
RUN npm install

COPY frontend/package.json frontend/package-lock.json frontend/
RUN npm install --prefix frontend

COPY . .
RUN mkdir -p frontend/static logs

EXPOSE 3001 8080 8081 8082
