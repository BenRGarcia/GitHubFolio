module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    const err = new Error('User is not authenticated')
    err.status = 401
    next(err)
  }
}
