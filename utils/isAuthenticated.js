module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.uuid = req.session.passport.user
    next()
  } else {
    var err = new Error('User is not authenticated')
    err.status = 401
    next(err)
  }
}
