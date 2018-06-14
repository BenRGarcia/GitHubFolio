require('dotenv').config()
var GitHubStrategy = require('passport-github').Strategy
const User = require('../controllers/UserController')

// https://github.com/jaredhanson/passport-github

const strategyConfig = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
}

const verifyCb = async (accessToken, refreshToken, profile, cb) => {
  // Destructure GitHub profile oAuth response object
  const { displayName, profileUrl } = profile
  const gitHubId = profile.id
  const email = profile.emails[0].value
  const photo = profile.photos[0].value
  const { bio, location } = profile._json
  console.log(`\n=====stuff:\n`, gitHubId, displayName, profileUrl, email, photo, bio, location)
  // Find or create user with destructured data
  User.loginFindOrCreate({ gitHubId, displayName, profileUrl, accessToken, email, photo, bio, location })
    .then(user => {
      console.log(`user:`, user)
      return cb(null, user)
    })
}

const gitHubStrategy = new GitHubStrategy(strategyConfig, verifyCb)

module.exports = gitHubStrategy
