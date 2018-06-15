const express = require('express')
const router = express.Router()
const isAuthenticated = require('../../utils/isAuthenticated')
const User = require('../../controllers/UserController')
const PinnedRepos = require('../../controllers/PinnedRepositoryController')

/**
 *  Helpful hint:
 *    `req.user` is the user's MongoDB `_id`
 */

// API Routes - '/api/user'
router.route('/data')
  .get( /* isAuthenticated, */ (req, res, next) => {
    const _id = req.user
    User.findOne({ _id: _id || "5b23fc020430dead3e4d0d4e" })
      .then(userData => res.json(userData))
      .catch(err => next(err))
  })

  .put(/* isAuthenticated, */(req, res, next) => {
    const _id = req.user
    const { photo, profileUrl, bio, location, displayName, email } = req.body.profile
    const updateObject = { photo, profileUrl, bio, location, displayName, email }
    User.findOneAndUpdate({ _id: _id || "5b23fc020430dead3e4d0d4e" }, updateObject)
      .then(userData => res.json(userData))
      .catch(err => next(err))
  })

router.route('/pinnedrepos')
  .post(/* isAuthenticated, */(req, res, next) => {
    const _id = req.user
    const repos = req.body
    PinnedRepos.bulkCreate({ _id: _id || "5b23fc020430dead3e4d0d4e" }, repos)
      .then(repoData => res.json(repoData))
      .catch(err => next(err))
  })

  .put( /* isAuthenticated, */ (req, res, next) => {
    const _id = req.user
    console.log(JSON.stringify(req.body, null, 2))
    PinnedRepos.bulkUpdate()
      .then(repoData => res.json(repoData))
      .catch(err => next(err))
    res.status(201).send()
  })

  
module.exports = router
