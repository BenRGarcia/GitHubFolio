const express = require('express')
const router = express.Router()
const { isAuthenticated, isAuthenticatedBoolean } = require('../../utils/isAuthenticated')
const { user, repository, gitHubAPI, fileHandler } = require('../../controllers')

/**
 * API Routes - '/api/user'
 */

router.route('/data')
  // Retrieve all user data, pinned repos included
  .get(isAuthenticated, (req, res, next) => {
    user.getDataById({ _id: req.user._id })
      .then(userData => res.json(userData))
      .catch(err => next(err))
  })
  // Update user data (non-pinned repo data)
  .put(isAuthenticated, (req, res, next) => {
    user.updateData({ _id: req.user._id }, req.body)
      .then(() => user.getDataById({ _id: req.user._id }))
      .then(userData => res.status(200).json(userData))
      .catch(err => next(err))
  })

router.route('/pinnedrepos')
  // Query GitHub graphQL, store pinned repos in DB
  .post(isAuthenticated, (req, res, next) => {
    fileHandler.handleDeleteOldImages({ _id: req.user._id })
      .then(() => gitHubAPI.getPinnedRepos({ accessToken: req.user.accessToken }))
      .then(repositories => repository.addNew({ _id: req.user._id, repositories }))
      .then(() => user.getDataById({ _id: req.user._id }))
      .then(userData => res.status(200).json(userData))
      .catch(err => next(err))
  })
  // Update user pinned repos
  .put(isAuthenticated, (req, res, next) => {
    repository.update(req.body)
      .then(() => user.getDataById({ _id: req.user._id }))
      .then(userData => {
        res.status(200).json(userData)
        console.log(userData)
      })
      .catch(err => next(err))
  })

router.route('/photo/:repoId')
  // Add photo to pinned repo
  .post(isAuthenticated, (req, res, next) => {
    fileHandler.handleImageUpload({ req, res, _id: req.params.repoId })
      .then(() => user.getDataById({ _id: req.user._id }))
      .then(userData => res.status(200).json(userData))
      .catch(err => next(err))
  })

router.route('/isauthenticated')
  // Return boolean of whether client is authenticated
  .get((req, res, next) => {
    res.json({ isAuthenticated: isAuthenticatedBoolean(req) })
  })

module.exports = router
