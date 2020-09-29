const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('config')

const appointments = require('./routes/api/appointments')
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')


const app = express()

app.use(bodyParser.json())

const db = config.get('mongoURI')

mongoose
    .connect(db, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('Connected to db...'))
    .catch(err => console.log(err))

// Routes
app.use('/api/appointments', appointments)
app.use('api/users', users)
app.use('api/auth', auth)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))