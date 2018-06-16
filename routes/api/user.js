const express = require('express')
const router = express.Router()
const { getPinnedRepos } = require('../../utils/githubAPI')
const isAuthenticated = require('../../utils/isAuthenticated')
const User = require('../../controllers/UserController')
const PinnedRepos = require('../../controllers/PinnedRepositoryController')

/**
 *  Helpful hint:
 *    `req.user._id` is the user's MongoDB `_id`
 */

// API Routes - '/api/user'
router.route('/data')
  .get(isAuthenticated, (req, res, next) => {
    User.findOne({ _id: req.user._id })
      .then(userData => res.json(userData))
      .catch(err => next(err))
  })

  .put(isAuthenticated, (req, res, next) => {
    const { displayName, profileUrl, email, photo, bio, location, template, color } = req.body
    const updateObject = { displayName, profileUrl, email, photo, bio, location, template, color }
    User.findOneAndUpdate({ _id: req.user._id }, updateObject)
      .then(() => res.status(201).send())
      .catch(err => next(err))
  })

router.route('/pinnedrepos')
  .get(isAuthenticated, (req, res, next) => {
    getPinnedRepos(req.user.accessToken)
      .then(pinnedRepos => PinnedRepos.bulkCreate({ _id: req.user._id }, pinnedRepos))
      .then(() => res.status(201).send())
      .catch(err => next(err))
  })

  .post(isAuthenticated, (req, res, next) => {
    PinnedRepos.bulkCreate({ _id: req.user._id }, req.body)
      .then(repoData => res.json(repoData))
      .catch(err => next(err))
  })

  .put(isAuthenticated, (req, res, next) => {
    PinnedRepos.bulkUpdate(req.body)
      .then(repoData => res.json(repoData))
      .catch(err => next(err))
  })

module.exports = router
