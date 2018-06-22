const express = require('express')
const router = express.Router()
const { isAuthenticated, isAuthenticatedBoolean } = require('../../utils/isAuthenticated')
const { User, Repository, gitHubAPI, fileHandler } = require('../../controllers')

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
    // Destructure request body, compose user data object
    const { profileName, profilePageUrl, email, profileImageUrl, bio, location, chosenTemplate, chosenColor } = req.body
    const userData = { _id: req.user._id, profileName, profilePageUrl, email, profileImageUrl, bio, location, chosenTemplate, chosenColor }
    User.updateData(userData)
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
    // Destructure request body, compose repo data object
    const { _id, name, description, repositoryUrl, deployedUrl } = req.body
    const repos = { _id, name, description, repositoryUrl, deployedUrl }
    Repository.update(repos)
      .then(() => res.status(204).send())
      .catch(err => next(err))
  })

router.route('/photo/:repoId')
  // Add photo to pinned repo
  .post(isAuthenticated, (req, res, next) => {
    fileHandler.handleImageUpload({ req, res, _id: req.params.repoId })
      .then(updatedRepoData => res.status(201).json(updatedRepoData))
      .catch(err => next(err))
  })

router.route('/isauthenticated')
  .get((req, res, next) => {
    res.json({ isAuthenticated: isAuthenticatedBoolean(req) })
  })

module.exports = router
