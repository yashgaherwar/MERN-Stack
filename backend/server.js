require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose")
const app = express();

/*const username = encodeURIComponent("<YashGaherwar>")
const password = encodeURIComponent("<Yash@123>")
const cluster = "<clusterName>"
const authSource  = "<authSource>"
const authMechanism = "<authMechanism>"
const DB_URL = 'mongodb+srv://<username>:<password>@cluster0.w9yu4.mongodb.net/Bug-Tracker?retryWrites=true&w=majority'
//'mongodb+srv://YashGaherwar:Yash@123@cluster0.w9yu4.mongodb.net/Bug-Tracker?retryWrites=true&w=majority'*/



mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err) return console.log('connected to DB')
    console.log(err)
})



const PORT = process.env.PORT || 3500

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())

app.use('/auth',require('./Controller/Routes/auth'))

app.listen(PORT,()=>{
    console.log('listening on ' + PORT)
})