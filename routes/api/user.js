const express = require('express')
const router = express.Router()
const { getPinnedRepos } = require('../../utils/githubAPI')
const { isAuthenticated, isAuthenticatedBoolean } = require('../../utils/isAuthenticated')
const User = require('../../controllers/UserController')
const PinnedRepos = require('../../controllers/PinnedRepositoryController')
const handleUpload = require('../../utils/imageUpload')

/**
 * API Routes - '/api/user'
 */

router.route('/data')
  // Retrieve all user data, pinned repos included
  .get(isAuthenticated, (req, res, next) => {
    User.findOne({ _id: req.user._id })
      .then(userData => res.json(userData))
      .catch(err => next(err))
  })
  // Update user data (non-pinned repo data)
  .put(isAuthenticated, (req, res, next) => {
    const { displayName, profileUrl, email, photo, bio, location, template, color } = req.body
    const updateObject = { displayName, profileUrl, email, photo, bio, location, template, color }
    User.findOneAndUpdate({ _id: req.user._id }, updateObject)
      .then(repos => res.status(201).json(repos))
      .catch(err => next(err))
  })

router.route('/pinnedrepos')
  // Query GitHub graphQL, store pinned repos in DB
  .post(isAuthenticated, (req, res, next) => {
    getPinnedRepos(req.user.accessToken)
      .then(repos => PinnedRepos.bulkCreate({ _id: req.user._id }, repos))
      .then(() => res.status(201).send())
      .catch(err => next(err))
  })
  // Update user pinned repos
  .put(isAuthenticated, (req, res, next) => {
    console.log(req.body)
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
