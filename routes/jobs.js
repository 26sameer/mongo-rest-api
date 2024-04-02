const router = require('express').Router()
let Job = require('../models/job.model')

// fetch all jobs
router.route('/').get((req, res) => {
  Job.find()
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((err) => {
      res.json({ Error: err })
    })
})

// find job by id
router.route('/:id').get((req, res) => {
  const _id = req.params.id
  Job.findById({ _id })
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((err) => {
      res.json({ Error: err })
    })
})

// add a job
router.route('/addPost').post((req, res) => {
  const post_desc = req.body.post_desc
  const post_exp = req.body.post_exp
  const post_profile = req.body.post_profile

  const newJob = new Job({
    post_desc,
    post_exp,
    post_profile,
  })

  newJob
    .save()
    .then(() => {
      res.json({ message: 'Job Added Successfully!' })
    })
    .catch((err) => {
      res.json({ Error: err })
    })
})

// add multiple jobs
router.route('/addPosts').post((req, res) => {
  req?.body?.map((data) => {
    const post_desc = data.post_desc
    const post_exp = data.post_exp
    const post_profile = data.post_profile

    const newJob = new Job({
      post_desc,
      post_exp,
      post_profile,
    })

    try {
      newJob.save()
    } catch (error) {
      res.json({ Error: error })
    }
  })

  return res.json({ message: 'Multiple Jobs Added Successfully!' })
})

// delete a job
router.route('/delete/:id').delete((req, res) => {
  const _id = req.params.id
  Job.findByIdAndDelete({ _id })
    .then(() => res.json('Job Post deleted.'))
    .catch((err) => res.json('Error: ' + err))
})

// update a job
router.route('/update/:id').put((req, res) => {
  const _id = req.params.id
  const post_desc = req.body.post_desc
  const post_exp = req.body.post_exp
  const post_profile = req.body.post_profile

  Job.findByIdAndUpdate({ _id }, { post_desc, post_exp, post_profile })
    .then(() => res.json('Job Post Updated.'))
    .catch((err) => res.json('Error: ' + err))
})

module.exports = router
