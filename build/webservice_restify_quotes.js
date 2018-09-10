const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(methodOverride())

mongoose.connect('mongodb://localhost:27017/zhipin')

restify.serve(router, mongoose.model('quote', new mongoose.Schema({
    author : { type: String },                    // 作者
    text : { type: String },                        // 名言警句
})))

app.use(router)

app.listen(3001, () => {
  console.log('Express server listening on port 3000')
})
