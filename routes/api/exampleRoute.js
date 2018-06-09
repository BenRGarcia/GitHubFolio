const express = require('express')
const router = express.Router()

/**
 * Example route
 */

// Test endpoint with Postman GET request to `localhost:3001/api/example`
router.get('*', (req, res) => {
  res.json({
    status: 'api server is up and running'
  })
})

module.exports = router
