const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text:{
    type: String,
    require: true
  }
})

//model creation
module.exports = mongoose.model('ToDo',todoSchema)