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

const addNewRepos = async ({ _id }, arrayOfObjects) => {
  await deleteOldRepos({ _id })
  const mongoDeliverable = arrayOfObjects.map(pinnedRepo => {
    const { name, description, homepageUrl, url } = pinnedRepo
    return {
      insertOne: {
        document: { name, description, homepageUrl, url }
      }
    }
  })

  const resp = await db.PinnedRepositories.bulkWrite(mongoDeliverable)
  const ids = Object.values(resp.insertedIds)
  return User.setPinnedRepos({ _id }, ids)
}

const updateRepos = async (repos) => {
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

const getImageFilename = async ({ _id }) => {
  const repoData = await db.PinnedRepositories.findOne({ _id })
  return repoData.imageName || false
}

const addImage = async ({ _id, imageUrl, imageName }) => {
  return db.PinnedRepositories.findOneAndUpdate(
    { _id },
    { $set: { imageUrl, imageName } },
    { new: true })
}

module.exports = {
  addNewRepos,
  updateRepos,
  getImageFilename,
  addImage
}
