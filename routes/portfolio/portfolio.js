const express = require('express')
const router = express.Router()
const { User, ssr, fileHandler } = require('../../controllers')
const { isAuthenticated } = require('../../utils/isAuthenticated')

/**
 * SSR Routes - '/portfolio'
 */

// React Server Side Rendering, send fully rendered public page
router.route('/user/:gitHubId')
  // PASS OR FAIL? -> FAIL
  .get((req, res, next) => {
    // Get user data, create SSR html page, send to client
    User.getDataByGitHubId({ gitHubId: req.params.gitHubId })
      .then(userData => ssr.renderPortfolioPage(userData))
      .then(html => res.send(html))
      .catch(err => next(err))
  })

// React Server Side Rendering, send fully rendered partial public page
router.route('/user/preview')
  // PASS OR FAIL? -> FAIL
  .get(isAuthenticated, (req, res, next) => {
    // Get user data, create SSR html page, send to client
    User.getDataById({ _id: req.user._id })
      .then(userData => ssr.renderPortfolioBody(userData))
      .then(html => res.send(html))
      .catch(err => next(err))
  })

// React Server Side Rendering, send download file of fully rendered page
router.route('/ssr')
  // PASS OR FAIL? -> FAIL
  .get(isAuthenticated, (req, res, next) => {
    // Get user data, create SSR html page, write to file, send to client, delete file
    User.getDataById({ _id: req.user._id })
      .then(userData => ssr.renderPortfolioPage(userData))
      .then(html => fileHandler.saveHTMLToLocalTempFolder({ html }))
      .then(filename => {
        const cb = err => {
          if (err) throw err
          fileHandler.deleteFileFromLocalTempFolder({ filename })
        }
        res.download(`../../temp/${filename}`, 'GitHubFolio_Source_Code.html', cb)
      })
      .catch(err => next(err))
  })

module.exports = router
