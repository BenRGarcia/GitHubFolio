require('dotenv').config()
var GitHubStrategy = require('passport-github').Strategy
const User = require('../controllers/UserController')

// https://github.com/jaredhanson/passport-github

const strategyConfig = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://localhost:3001/api/auth/github/callback'
}

const verifyCb = (accessToken, refreshToken, profile, cb) => {
  // Destructure GitHub profile oAuth response object
  const { gitHubId, displayName, profileUrl } = profile
  const email = profile.emails[0].value
  const photo = profile.photos[0].value
  const { bio, location } = profile._json
  // Find or create user with destructured data
  User.LoginFindOrCreate({ gitHubId, displayName, profileUrl, accessToken, email, photo, bio, location }, (err, user) => {
    return cb(err, user)
  })
}

const gitHubStrategy = new GitHubStrategy(strategyConfig, verifyCb)

module.exports = gitHubStrategy
