const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const { getPinnedRepos } = require('../../utils/githubAPI')
const isAuthenticated = require('../../utils/isAuthenticated')
const User = require('../../controllers/UserController')
const PinnedRepos = require('../../controllers/PinnedRepositoryController')

// Set storage engine
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../temp/photos/'),
  filename: (req, file, cb) => {
    const fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    cb(null, fileName)
  }
})

// Init upload
const upload = multer({ storage }).single('profile')

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
      .catch(err => next(err))
  })
  // Update user pinned repos
  .put(isAuthenticated, (req, res, next) => {
    PinnedRepos.bulkUpdate(req.body)
      .then(() => res.status(204).send())
      .catch(err => next(err))
  })

router.route('/photo')
  // Add photo to pinned repo
  .post(/* isAuthenticated, */ (req, res, next) => {
    upload(req, res, (err) => {
      if (err) {
        res.json({ err })
      } else {
        console.log(req.file)
        res.send('test')
      }
    })
    /* PinnedRepos.addPhoto({})
      .then(() => res.status(201).send())
      .catch(err => next(err)) */
    /* res.json({
      message: 'got it',
      body: req.body
    }) */
  })

module.exports = router
