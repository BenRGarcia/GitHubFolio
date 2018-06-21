
const express = require('express')
const router = express.Router()
const { User, ssr } = require('../../controllers')
const fs = require('fs')
const path = require('path')

/**
 * Public Routes - '/portfolio'
 */

// React Server Side Rendering, send fully rendered page
router.route('/user/:gitHubId')
  .get((req, res, next) => {
    // Get user data from the database
    User.getDataByGitHubId({ gitHubId: req.params.gitHubId })
      // Create SSR html page
      .then(userData => ssr.renderPortfolioPage(userData))
      // Send rendered html to client
      .then(html => res.send(html))
      .catch(err => next(err))
  })

// React Server Side Rendering, send file of fully rendered page
router.route('/ssr/:gitHubId')
  .get((req, res, next) => {
    console.log(`request received in the backend`)
    findOneByGitHubId({ gitHubId: req.params.gitHubId })
      .then(userData => {
        // Destructure for user data
        const { template, color, pinnedRepositories, bio, displayName, email, location, photo, profileUrl } = userData
        const user = { template, color, pinnedRepositories, bio, displayName, email, location, photo, profileUrl }
        const html = renderToStaticMarkup(
          React.createElement(htmlTemplate, { user })
        )
        const filepath = path.join(__dirname, '../../temp/ssr/')
        const filename = `${uuidv4()}.html`
        const file = `${filepath}${filename}`
        fs.appendFile(file, `<!DOCTYPE html>${html}`, (err) => {
          if (err) throw err
          res.download(file)
        })
      })
      .catch(err => {
        console.error(err)
        res.json({ ssrBroke: err })
      })
  })

module.exports = router
