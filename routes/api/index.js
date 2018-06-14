const router = require('express').Router()
const userRoute = require('./user')
const authRoute = require('./auth')

// API Routes - '/api/...'
router.use('/user', userRoute)
router.use('/auth', authRoute)

module.exports = router
