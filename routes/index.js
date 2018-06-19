const router = require('express').Router()
const apiRoutes = require('./api')
const portfolioRoutes = require('./portfolio/portfolio')

// API Routes
router.use('/api', apiRoutes)

// Public Portfolio Routes
router.use('/portfolio', portfolioRoutes)

module.exports = router
