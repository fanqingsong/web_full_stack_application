# demo

> scratch job techniques from boss zhipin, save to database, and show them through web. （A Vue.js Project）
> Front end is vue.js project, including v-charts bar component, 
> Back end is websocket server, which query data form mongodb through ORM mongoose every period, pushing summary data to front end(v-chart bar)
> data picker use scrapy to search zhipin site to save to mongodb （to be implement）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# start websocket server
npm run websocket

# start webservice restfull api server
npm run webservice

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
