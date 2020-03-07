const product = require('./routes/product.route')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

// set DB

const url = 'mongodb://localhost:27017/test'
let mongoDB = process.env.MONGODB_URI || url

mongoose.connect(mongoDB).then(() => {
}, err => { app.send('err', err)})
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', product)

const port = 3000

app.listen(port, () => console.log(`test listen from ${port}`))