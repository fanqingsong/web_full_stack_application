/**
 * 用户信息
 */
var mongoose = require('./db'),
    Schema = mongoose.Schema;

var SummarySchema = new Schema({          
    Technology : { type: String },                    // 技术名称
    Count : { type: Number },                        // 技术数目
});

module.exports = mongoose.model('summary',SummarySchema);


