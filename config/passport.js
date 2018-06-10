var passport = require('passport')
var GitHubStrategy = require('passport-github2').Strategy
var db = require('../models')

/* passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  db.User.findOne({ where: { email } })
    .then(user => {
      if (!user || !user.validPassword(password)) {
        return done(null, false, { msg: 'Incorrect email/password combination.' })
      }
      var uuid = user.dataValues.uuid
      user.dataValues.email = null
      user.dataValues.password = null
      return done(null, { uuid })
    })
    .catch(err => done(err))
})) */

// https://github.com/cfsghost/passport-github/blob/master/examples/login/app.js

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://127.0.0.1:3000/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
  db.User.findOrCreate({ githubId: profile.id }, (err, user) => {
    return done(err, user)
  })
}
))

passport.serializeUser((user, cb) => cb(null, user.uuid))
passport.deserializeUser((obj, cb) => cb(null, obj))

module.exports = passport
