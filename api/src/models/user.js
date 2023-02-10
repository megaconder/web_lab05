const mongoose = require ('mongoose')

const User = new mongoose.model('User', {name:String})

module.exports = User 