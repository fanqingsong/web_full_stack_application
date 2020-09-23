/**
 * 用户信息
 */
var mongoose = require('./db'),
    Schema = mongoose.Schema;

var QuoteSchema = new Schema({          
    author : { type: String },                    // 作者
    text : { type: String },                        // 名言警句
});

module.exports = mongoose.model('quote', QuoteSchema);


