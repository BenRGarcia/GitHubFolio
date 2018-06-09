const router = require('express').Router()
const exampleRoutes = require('./exampleRoute')

// API Routes - '/api/...'
router.use('/example', exampleRoutes)

module.exports = router
