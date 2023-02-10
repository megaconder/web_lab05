const express = require ("express")
const app = express()
const mongoose = require ("mongoose")

//const PORT = process.env.PORT
//const HOST = process.env.HOST
//const MONGO_DB = process.env.MONGO_DB

const {port, host} = require ("./configuration/index")
const {connectDB} =require ("./utils/db")
const User = require ("./models/user")

//const User = mongoose.model ("User", {name:String, age:Number})

app.get ("/test", (req, res) => {
    res.send("Server is working correctly")
})

app.get ("/users", async (req, res) => {
    try {
        const user = new User ({name: "Conder"})
        await user.save ()
        const users = await User.find()
        res.json(users)
    } catch (e) {
        res.send (e.message)
    }
    

})

//mongoose.set('strictQuery', false)

// mongoose.connect (MONGO_DB)

const startServer = () => {
    app.listen (port, () => {
        console.log(`API-service is running on ${host}:${port}`)
        } )
}

connectDB ()
    .on("error", console.error.bind ("connection error"))
    .once ("open", startServer)