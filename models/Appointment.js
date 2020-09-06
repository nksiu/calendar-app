const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
  appointment_author: {
    type: String,
    required: true
  },
  appointment_name: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true 
  },
  end_date: {
    type: Date,
    required: true 
  },
  date_to_query: {
    type: String,
    required: true
  }
})

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema)