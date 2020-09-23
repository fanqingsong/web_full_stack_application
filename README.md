## Full Stack Web Application

### Purpose

This is a demo project for showing how one full stack web application should be like.

### Introduction

features:
- [X] scrawler get data into database
- [X] webserver push data to browser periodically 

---

## workflow

1. scratch quotes from scrapy offical demo site(quotes), save to database(MongoDB), and show them through web.
2. Front end is vue.js project, including WebSocket client(socketio) component.
3. Back end is websocket server, which query data form MongoDB through ORM mongoose every period(1s), pushing quotes data to front end.
4. data picker use scrapy to crawl quotes to save to MongoDB.


---

## technology stack

Scrapy + webservice[restful] + websocket + VueJS + MongoDB

| Component | Description |
| ----------- | ----------- |
| Scrapy | scratch data from web |
| webservice | serve restapi for data storation and fetch |
| websocket | push data to browser |
|  VueJS | frontend |
| MongoDB | DB |

---

## Run

``` bash
# install nodejs dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# start websocket server
npm run websocket_quotes

# start webservice restfull api server
npm run webservice_quotes

# install python dependencies
cd scrapy && pip install -r requirement.txt

# start scrapy
scrapy crawl quotes
```
