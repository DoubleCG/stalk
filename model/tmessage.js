var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tmessageSchema = new Schema({
    uid:String,
    mess:Array,
    // var mess = [{
    // 	uid:String,
    //	headImg:String,
    //  name:String,
    // 	time:String,
    // 	content:String,
    // },
    // ...
    // ]
})

var Tmessage = mongoose.model('Tmessage', tmessageSchema);
module.exports = Tmessage;