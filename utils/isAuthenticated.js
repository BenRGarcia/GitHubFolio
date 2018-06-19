module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.status(401).redirect('/')
    }
  },
  isAuthenticatedBoolean: (req, res, next) => {
    return req.isAuthenticated()
  }
}
