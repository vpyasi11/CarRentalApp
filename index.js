const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const UserRouter = require("./routes/UserRouter")

const app = express()
app.use(express.json())

app.get('/test', (req, res) => {
    res.json({
        message: "get request working!!"
    })
})

mongoose.connect(process.env.Mongo_url)
    .then(() => console.log('Connected to my DB!'));

app.use("/auth", UserRouter)
// http://localhost:5000/auth/register

const port = process.env.Port
app.listen(port, () => {
    console.log("server running")
})