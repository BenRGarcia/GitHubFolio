const db = require('../models')
const User = require('./UserController')

const deleteOldRepos = async ({ _id }) => {
  const resp = await User.getRepoIds({ _id })
  const repoIds = resp.pinnedRepositories
  if (repoIds.length > 0) {
    const mongoDeliverable = repoIds.map(repoId => {
      return {
        deleteOne: {
          filter: { _id: repoId }
        }
      }
    })
    return db.PinnedRepositories.bulkWrite(mongoDeliverable)
  }
  return false
}

const bulkCreate = async ({ _id }, arrayOfObjects) => {
  await deleteOldRepos({ _id })
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
