const db = require('../models')
const User = require('./UserController')

const bulkCreate = async ({ _id }, arrayOfObjects) => {
  const mongoDeliverable = arrayOfObjects.map(pinnedRepo => {
    const { name, description, homepageUrl, url } = pinnedRepo
    return {
      insertOne: {
        document: { name, description, homepageUrl, url }
      }
    }
  })

  return db.PinnedRepositories.bulkWrite(mongoDeliverable)
    .then(resp => {
      let ids = Object.values(resp.insertedIds)
      return User.setPinnedRepos({ _id }, ids)
    })
}

const bulkUpdate = async (repos) => {
  const mongoDeliverable = repos.map(pinnedRepo => {
    const { _id, name, description, homepageUrl, url } = pinnedRepo
    return {
      updateOne: {
        filter: { _id },
        update: { name, description, homepageUrl, url }
      }
    }
  })
  return db.PinnedRepositories.bulkWrite(mongoDeliverable)
}

module.exports = {
  bulkCreate,
  bulkUpdate
}
