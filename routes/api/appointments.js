const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Appointment = require('../../models/Appointment')

// @route GET api/appointments
// @desc Get all appointments
router.get('/', (req, res) => {
  Appointment.find({start_date: {$gte: `${req.query.prevMonth}-10T00:00:00.000Z`, $lte: `${req.query.nextMonth}-10T00:00:00.000Z`}})
    .sort({start_date: 1})
    .then(appointments => res.json(appointments))
})

// @route POST api/appointments
// @desc Create an appointment
// @access Private
router.post('/', auth, (req, res) => {
  const newAppointment = new Appointment({
    appointment_author: req.body.appointmentAuthor,
    appointment_name: req.body.appointmentName,
    start_date: req.body.startDate,
    end_date: req.body.endDate,
    date_to_query: req.body.dateToQuery
  })

  newAppointment.save()
    .then(appointment => res.json(appointment))
})

// @route DELETE api/appointments/:id
// @desc Delete an appointment
// @access Private
router.delete('/:id', auth, (req, res) => {
  Appointment.findById(req.params.id)
    .then(appointment => appointment.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

// @route PUT api/appointments/:id
// @desc Update an appointment
// @access Private
router.put('/:id', auth, (req, res) => {
  const filter = {_id: req.body.appointmentId}
  const update = {
    appointment_name: req.body.appointmentName,
    start_date: req.body.startDate,
    end_date: req.body.endDate,
    date_to_query: req.body.dateToQuery
  }
  Appointment.findOneAndUpdate(filter, update, {new: true})
    .then(appointment => res.json(appointment))
    .catch(err => res.status(404))
})

module.exports = router