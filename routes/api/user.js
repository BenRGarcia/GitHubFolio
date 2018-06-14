const express = require('express')
const router = express.Router()
var db = require('../../models')
const userController = require('../../controllers/UserController')
const pinnedRepositoryController = require('../../controllers/PinnedRepositoryController')
var isAuthenticated = require('../../utils/isAuthenticated')

// API Routes - '/api/user'
router.route('/data')
  .get(/* isAuthenticated, */(req, res, next) => {
    const { gitHubId } = req.user
    const userData = await userController.findOne({ gitHubId })
    res.json(userData)
  })

  .put(/* isAuthenticated, */(req, res, next) => {
    const { gitHubId } = req.user
    const { photo,
      profileUrl,
      bio,
      location,
      displayName,
      email } = req.body.profile
    const userData = await userController.findOneAndUpdate({ gitHubId }, { photo,
      profileUrl,
      bio,
      location,
      displayName,
      email })
    res.json(userData)
  })

router.route('/pinnedrepos')
  .post(/* isAuthenticated, */(req, res, next) => {
    const { gitHubId } = req.user
    const repoData = await pinnedRepositoryController.bulkUpdate({//some array})
    res.json(userData)
  })
  
module.exports = router
