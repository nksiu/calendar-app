const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const appointments = require('./routes/api/appointments')



const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose
    .connect(db, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to db...'))
    .catch(err => console.log(err))

// Routes
app.use('/api/appointments', appointments)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))