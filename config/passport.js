const passport = require('passport')
const gitHubStrategy = require('./passportGitHub')

// https://github.com/jaredhanson/passport

passport.use(gitHubStrategy)
passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))

module.exports = passport
