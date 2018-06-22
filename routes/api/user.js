const express = require('express')
const router = express.Router()
const { isAuthenticated, isAuthenticatedBoolean } = require('../../utils/isAuthenticated')
const { user, repository, gitHubAPI, fileHandler } = require('../../controllers')

/**
 * API Routes - '/api/user'
 */

router.route('/data')
  // Retrieve all user data, pinned repos included
  // PASS OR FAIL? -> PASS
  .get(isAuthenticated, (req, res, next) => {
    user.getDataById({ _id: req.user._id })
      .then(userData => res.json(userData))
      .catch(err => next(err))
  })
  // Update user data (non-pinned repo data)
  // PASS OR FAIL? -> PASS
  .put(isAuthenticated, (req, res, next) => {
    user.updateData({ _id: req.user._id }, req.body)
      .then(() => user.getDataById({ _id: req.user._id }))
      .then(userData => res.status(200).json(userData))
      .catch(err => next(err))
  })

router.route('/pinnedrepos')
  // Query GitHub graphQL, store pinned repos in DB
  // PASS OR FAIL? -> PASS
  .post(isAuthenticated, (req, res, next) => {
    gitHubAPI.getPinnedRepos({ accessToken: req.user.accessToken })
      .then(repositories => repository.addNew({ _id: req.user._id, repositories }))
      .then(() => user.getDataById({ _id: req.user._id }))
      .then(userData => res.status(200).json(userData))
      .catch(err => next(err))
  })
  // Update user pinned repos
  // PASS OR FAIL? -> PASS
  .put(isAuthenticated, (req, res, next) => {
    repository.update(req.body)
      .then(() => user.getDataById({ _id: req.user._id }))
      .then(userData => res.status(200).json(userData))
      .catch(err => next(err))
  })

router.route('/photo/:repoId')
  // Add photo to pinned repo
  // PASS OR FAIL? -> FAIL
  .post(isAuthenticated, (req, res, next) => {
    fileHandler.handleImageUpload({ req, res, _id: req.params.repoId })
      .then(updatedRepoData => res.status(201).json(updatedRepoData))
      .catch(err => next(err))
  })

router.route('/isauthenticated')
  // PASS OR FAIL? -> PASS
  .get((req, res, next) => {
    res.json({ isAuthenticated: isAuthenticatedBoolean(req) })
  })

module.exports = router
