# show full stack technology applications : Scrapy + webservice[restful] + websocket + VueJS + MongoDB

1. scratch quotes from scrapy offical demo site(quotes), save to database(MongoDB), and show them through web.
2. Front end is vue.js project, including WebSocket client(socketio) component.
3. Back end is websocket server, which query data form MongoDB through ORM mongoose every period(1s), pushing quotes data to front end.
4. data picker use scrapy to crawl quotes to save to MongoDB.


----

## Build Setup

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
