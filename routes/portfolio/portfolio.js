require('babel-register')({
  presets: ['react']
})
const express = require('express')
const router = express.Router()
const { findOneByGitHubId } = require('../../controllers/UserController')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const htmlTemplate = require('../../utils/ssr')
const fs = require('fs')
const path = require('path')
const uuidv4 = require('uuid/v4')

/**
 * Public Routes - '/portfolio'
 */

// React Server Side Rendering, send fully rendered page
router.route('/user/:gitHubId')
  .get((req, res, next) => {
    findOneByGitHubId({ gitHubId: req.params.gitHubId })
      .then(userData => {
        // Destructure for user data
        const { template, color, pinnedRepositories, bio, displayName, email, location, photo, profileUrl } = userData
        const user = { template, color, pinnedRepositories, bio, displayName, email, location, photo, profileUrl }
        const html = renderToStaticMarkup(
          React.createElement(htmlTemplate, { user })
        )
        res.send(html)
      })
      .catch(err => {
        console.error(err)
        res.json({ ssrBroke: err })
      })
  })

/**
 * Psuedocode:
 *   1) Endpoint receives a GET request
 *   2) Extract req param
 *   3) Grab data about user from DB
 *   4) Feed data into component
 *   5) Work some SSR magic
 *   6) Send SSR file as download to client
 *   7) Delete file <- Still need to implement this
 *   8) Still need to implement handling of nonexistent users
 */

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
