const express = require('express')
const router = express.Router()
const isAuthenticated = require('../../utils/isAuthenticated')
const User = require('../../controllers/UserController')
const PinnedRepos = require('../../controllers/PinnedRepositoryController')

/**
 *  Helpful hint:
 *    `req.user` is the user's MongoDB `_id`
 */

// API Routes - '/api/user'
router.route('/data')
  .get(isAuthenticated, (req, res, next) => {
    const _id = req.user
    User.findOne({ _id })
      .then(userData => res.json(userData))
      .catch(err => next(err))
  })

  .put(isAuthenticated, (req, res, next) => {
    const _id = req.user
    const { displayName, profileUrl, email, photo, bio, location, template, color } = req.body
    const updateObject = { displayName, profileUrl, email, photo, bio, location, template, color }
    User.findOneAndUpdate({ _id }, updateObject)
      .then(() => res.status(201).send())
      .catch(err => next(err))
  })

router.route('/pinnedrepos')
  .post(isAuthenticated, (req, res, next) => {
    const _id = req.user
    const repos = req.body
    PinnedRepos.bulkCreate({ _id }, repos)
      .then(repoData => res.json(repoData))
      .catch(err => next(err))
  })

  .put(isAuthenticated, (req, res, next) => {
    const _id = req.user
    console.log(JSON.stringify(req.body, null, 2))
    PinnedRepos.bulkUpdate()
      .then(repoData => res.json(repoData))
      .catch(err => next(err))
    res.status(201).send()
  })

module.exports = router
