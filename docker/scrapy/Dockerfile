FROM swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/python:3.9-slim

WORKDIR /app

COPY backend/scrapy/scratch_zhipin /app

RUN pip install --no-cache-dir \
    -i https://pypi.tuna.tsinghua.edu.cn/simple \
    scrapy requests

CMD ["scrapy", "crawl", "quotes"]
