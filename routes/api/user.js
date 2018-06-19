const express = require('express')
const router = express.Router()
const { getPinnedRepos } = require('../../utils/githubAPI')
const isAuthenticated = require('../../utils/isAuthenticated')
const User = require('../../controllers/UserController')
const PinnedRepos = require('../../controllers/PinnedRepositoryController')
const { handleUpload, deletePhoto } = require('../../utils/imageUpload')
const s3 = require('../../utils/awsS3')
const fs = require('fs')
const path = require('path')

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

router.route('/photo/:repoId')
  // Add photo to pinned repo
  .post(isAuthenticated, (req, res, next) => {
    // Make file name variable accessible in closure
    let repoId = req.params.repoId
    console.log(`POST request with req.param.repoId: ${repoId}`)
    let fileName
    // // Put uploaded image in `~/temp/photos/`
    handleUpload(req, res)
      // Get/set filename from response
      .then(resp => {
        fileName = resp.filename
        return resp
      })
      // image upload to aws s3
      .then(() => s3.uploadImage({ fileName, stream: fs.createReadStream(path.join(__dirname, `../../temp/photos/${fileName}`)) }))
      // set public url in database
      .then(awsData => {
        const imgUrl = awsData.Location
        PinnedRepos.addPhoto({ _id: repoId, imageUrl: imgUrl, imageName: fileName })
      })
      // Delete photo from local temp folder
      .then(() => fs.unlink(path.join(__dirname, `../../temp/photos/${fileName}`)))
      .then(resp => res.status(201).json(resp))
      .catch(err => next(err))
    //   // Add image to database
    //   .then(resp => PinnedRepos.addPhoto({ _id: repoId }, fileName))
    //   // Delete image from `~/temp/photos/` folder
    //   .then(() => console.log(`you need to delete the image from '../../temp/photos'`))
    //   .then(() => fs.unlink(../../temp/photos/${fileName}))
    //   .then(() => res.status(201).send())
    //   .catch(err => next(err))
  })

module.exports = router
