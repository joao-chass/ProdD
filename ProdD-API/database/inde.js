const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/register',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))


module.exports = mongoose;