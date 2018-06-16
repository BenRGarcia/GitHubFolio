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
    const _id = req.user._id
    User.findOne({ _id })
      .then(userData => res.json(userData))
      .catch(err => next(err))
  })

  .put(isAuthenticated, (req, res, next) => {
    const _id = req.user._id
    const { displayName, profileUrl, email, photo, bio, location, template, color } = req.body
    const updateObject = { displayName, profileUrl, email, photo, bio, location, template, color }
    User.findOneAndUpdate({ _id }, updateObject)
      .then(() => res.status(201).send())
      .catch(err => next(err))
  })

router.route('/pinnedrepos')
  .get(isAuthenticated, (req, res, next) => {
    // Use githubAPI module to query v4 graphQL endpoint
    getPinnedRepos(req.user.accessToken)
      .then(resp => {
        // Send JSON object of pinned repo data
        res.json(resp)
      })
  })

  .post(isAuthenticated, (req, res, next) => {
    const _id = req.user._id
    const repos = req.body
    PinnedRepos.bulkCreate({ _id }, repos)
      .then(repoData => res.json(repoData))
      .catch(err => next(err))
  })

  .put(isAuthenticated, (req, res, next) => {
    const repos = req.body
    PinnedRepos.bulkUpdate(repos)
      .then(repoData => res.json(repoData))
      .catch(err => next(err))
  })

module.exports = router
