const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/User')

// @route POST api/users
// @desc Register new user
router.post('/', (req, res) => {
  const {name, email, password, settings} = req.body

  if(!name || !email || !password) {
    return res.status(400).json({msg: 'Please enter all fields'})
  }

  User.findOne({email}).then(user => {
    if (user) {
      return res.status(400).json({msg: 'User already exists'})
    }

    const newUser = new User({
      name,
      email,
      password,
      settings: {
        hide_appointments: settings.hideAppointments
      }
    })

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash

        newUser.save().then(user => {
          jwt.sign(
            {id: user.id},
            process.env.JWT_SECRET,
            {expiresIn: 3600},
            (err, token) => {
              if (err) throw err
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              })
            }
          )
        })
      })
    })
  })
})

module.exports = router
