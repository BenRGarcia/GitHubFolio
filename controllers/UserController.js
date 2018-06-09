const db = require('../models')

// Defining methods for the booksController
module.exports = {
  find: async ({ userId }) => {
    return db.User
      .find({ userId })
      .then(resp => resp)
      .catch(err => err)
  }
}
