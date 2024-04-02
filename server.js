// import express,cors,mongoose and dotenv
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// create an express app
const app = express()
app.use(cors())
app.use(express.json())

// provide database port and uri
const port = process.env.PORT
const uri = process.env.ATLAS_URI

// connecting to mongodb using mongoose
mongoose.connect(uri)
const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB database connection established!')
})

// import the express router created
const jobRouter = require('./routes/jobs')

// use the imported router
app.use('/jobs', jobRouter)

// simple hello world
// app.get('/', (req, res) => {
//   res.json({ message: 'Hello World!' })
// })

// listen to port provided
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
