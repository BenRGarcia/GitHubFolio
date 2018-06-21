const express = require('express')
const router = express.Router()
const { isAuthenticated, isAuthenticatedBoolean } = require('../../utils/isAuthenticated')
const { User, Repository, gitHubAPI } = require('../../controllers')
const handleUpload = require('../../utils/imageUpload')

/**
 * API Routes - '/api/user'
 */

router.route('/data')
  // Retrieve all user data, pinned repos included
  .get(isAuthenticated, (req, res, next) => {
    User.getDataById({ _id: req.user._id })
      .then(userData => res.json(userData))
      .catch(err => next(err))
  })
  // Update user data (non-pinned repo data)
  .put(isAuthenticated, (req, res, next) => {
    const { profileName, profilePageUrl, email, profileImageUrl, bio, location, chosenTemplate, chosenColor } = req.body
    User.updateData({ _id: req.user._id, profileName, profilePageUrl, email, profileImageUrl, bio, location, chosenTemplate, chosenColor })
      .then(repos => res.status(201).json(repos))
      .catch(err => next(err))
  })

router.route('/pinnedrepos')
  // Query GitHub graphQL, store pinned repos in DB
  .post(isAuthenticated, (req, res, next) => {
    gitHubAPI.getPinnedRepos(req.user.accessToken)
      .then(repositories => Repository.addNew({ _id: req.user._id, repositories }))
      .then(() => res.status(201).send())
      .catch(err => next(err))
  })
  // Update user pinned repos
  .put(isAuthenticated, (req, res, next) => {
    PinnedRepos.bulkUpdate(req.body)
      .then(() => res.status(204).send())
      .catch(err => next(err))
  })

router.route('/photo/:repoId')
  // Add photo to pinned repo
  .post(isAuthenticated, (req, res, next) => {
    handleUpload({ req, res, _id: req.params.repoId })
      .then(updatedRepoData => res.status(201).json(updatedRepoData))
      .catch(err => next(err))
  })

router.route('/isauthenticated')
  .get((req, res, next) => {
    const isAuthenticated = isAuthenticatedBoolean()
    res.json({ isAuthenticated })
  })

module.exports = router
