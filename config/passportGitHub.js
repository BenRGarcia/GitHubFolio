require('dotenv').config()
const GitHubStrategy = require('passport-github').Strategy
const { User } = require('../controllers')

// https://github.com/jaredhanson/passport-github

const strategyConfig = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
}

const verifyCb = async (accessToken, refreshToken, profile, cb) => {
  // Compose user object from GitHub oAuth `profile` response
  const userProfile = {
    gitHubId: profile.id,
    profileName: profile.displayName,
    profilePageUrl: profile.profileUrl,
    accessToken: accessToken,
    email: profile.emails[0].value,
    profileImageUrl: profile.photos[0].value,
    bio: profile._json.bio,
    location: profile._json.location
  }
  // Find or create user with destructured data
  const user = await User.loginWithGitHub(userProfile)
  // Passport.js callback
  return cb(null, { _id: user._id, accessToken })
}

const gitHubStrategy = new GitHubStrategy(strategyConfig, verifyCb)

module.exports = gitHubStrategy
