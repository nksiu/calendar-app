const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
require('dotenv').config()

app.use(express.json())

const db = process.env.SERVER_KEY

mongoose
    .connect(db, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('Connected to db...'))
    .catch(err => console.log(err))

// Routes
app.use('/api/appointments', require('./routes/api/appointments'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))