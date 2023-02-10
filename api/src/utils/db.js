const mongoose  = require('mongoose')
const {db} = require("./../configuration/index")

module.exports.connectDB = () => {
    mongoose.connect(db, {useNewUrlParser : true})
    return mongoose.connection
}