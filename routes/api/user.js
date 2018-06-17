const express = require('express')
const router = express.Router()
const { getPinnedRepos } = require('../../utils/githubAPI')
const isAuthenticated = require('../../utils/isAuthenticated')
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
      .then(() => res.status(201).send())
      .catch(err => next(err))
  })

router.route('/pinnedrepos')
  // Query GitHub graphQL, store pinned repos in DB
  .post(isAuthenticated, (req, res, next) => {
    getPinnedRepos(req.user.accessToken)
      .then(repos => PinnedRepos.bulkCreate({ _id: req.user._id }, repos))
      .then(() => res.status(201).send())
  })
  // Update user pinned repos
  .put(isAuthenticated, (req, res, next) => {
    PinnedRepos.bulkUpdate(req.body)
      .then(() => res.status(204).send())
      .catch(err => next(err))
  })

// router.route('/photo/:repoId')
router.route('/photo')
  // Add photo to pinned repo
  .post(/* isAuthenticated,  */(req, res, next) => {
    // const repoId = req.params.repoId
    // Put uploaded image in `/temp/photos/`
    handleUpload(req, res)
      // Get filename from response
      .then(resp => resp.filename)
      // Add image to database
      .then(() => console.log(`you need to add the image to the database here`))
      // Delete image from `/temp/photos/` folder
      .then(() => console.log(`you need to delete the image from '../../temp/photos'`))
      .then(() => res.status(201).send())
      .catch(err => next(err))
  })

module.exports = router
