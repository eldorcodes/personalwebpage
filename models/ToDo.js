const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    name:String,
    date:{
        type:String,
        default:Date.now
    }
})

module.exports = mongoose.model('Todo',TodoSchema)