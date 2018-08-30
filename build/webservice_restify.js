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

restify.serve(router, mongoose.model('summary', new mongoose.Schema({
    Technology : { type: String },                    // 技术名称
    Count : { type: Number },                        // 技术数目
})))

app.use(router)

app.listen(3000, () => {
  console.log('Express server listening on port 3000')
})
