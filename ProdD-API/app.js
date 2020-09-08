require('dotenv').config();

const express = require('express')
const router = express.Router()
var cors = require('cors')
const app = express()
const mongoose = require('mongoose')

const port = normalizaPort(process.env.PORT || '3000');

app.use(cors())

mongoose.connect('mongodb://localhost/register',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const registerRouter = require('./routes/api/register')
app.use('/register', registerRouter)

app.get('/', function (req, res) {
    res.send("Api run");
  });

function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}


app.listen(port, function () {
  console.log(`app listening on port ${port}`)
})