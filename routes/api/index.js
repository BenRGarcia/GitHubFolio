const router = require('express').Router()
const userRoute = require('./user')

// API Routes - '/api/...'
router.use('/user', userRoute)

module.exports = router
