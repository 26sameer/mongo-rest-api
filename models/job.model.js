const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({
  post_desc: { type: String, required: true },
  post_exp: { type: Number, required: true },
  post_profile: { type: String, required: true },
})

const Job = mongoose.model('Job', jobSchema)
module.exports = Job
