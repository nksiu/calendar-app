const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')

const User = require('../../models/User')

// @route POST api/auth
// @desc Authenticate user
router.post('/', (req, res) => {
  const {email, password} = req.body

  if(!email || !password) {
    return res.status(400).json({msg: 'Please enter all fields'})
  }

  User.findOne({email}).then(user => {
    if (!user) {
      return res.status(400).json({msg: 'User does not exist'})
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        return res.status(400).json({msg: 'Invalid crendentials'})
      }
      
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
              email: user.email,
              settings: user.settings
            }
          })
        }
      )
    })
  })
})

// @route GET api/auth/user
// @desc Get user data
// @access Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})

// @route PUT api/auth/user/settings
// @desc Update user settings data
// @access Private
router.put('/user/settings', (req, res) => {
  const filter = {_id: req.body.userId}
  const update = {
    'settings.hide_appointments': req.body.hideAppointments
  }
  User.findOneAndUpdate(filter, update, {new: true})
    .then(user => res.json(user))
    .catch(err => res.status(404))
})

module.exports = router