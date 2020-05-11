require('dotenv').config();

const express = require('express')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/register',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const registerRouter = require('./routes/api/register')
app.use('/register', registerRouter)

app.listen(3000, () => console.log('server started'))