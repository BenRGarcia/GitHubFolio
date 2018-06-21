const { Repository } = require('../models')
const { User } = require('./')

const deleteOldRepositories = async ({ _id }) => {
  const userData = await User.getRepositoryIds({ _id })
  const repoIds = userData.repositories
  if (repoIds.length > 0) {
    const operations = repoIds.map(_id => {
      return {
        deleteOne: {
          filter: { _id }
        }
      }
    })
    return Repository.bulkWrite(operations)
  }
}

const addNew = async ({ _id, repositories }) => {
  await deleteOldRepositories({ _id })
  const operations = repositories.map(repository => {
    return {
      insertOne: {
        document: {
          repository
        }
      }
    }
  })
  const resp = await Repository.bulkWrite(operations)
  const repoIds = Object.values(resp.insertedIds)
  return User.associateRepositories({ _id, repoIds })
}

const update = async (repositories) => {
  const operations = repositories.map(repository => {
    const { _id, name, description, repositoryUrl, deployedUrl } = repository
    return {
      updateOne: {
        filter: { _id },
        update: {
          name,
          description,
          repositoryUrl,
          deployedUrl
        }
      }
    }
  })
  return Repository.bulkWrite(operations)
}

const getImageFilename = async ({ _id }) => {
  const repoData = await Repository.findOne({ _id })
  return repoData.imageName || false
}

const addImage = async ({ _id, imageUrl, imageName }) => {
  return Repository.findOneAndUpdate(
    { _id },
    { $set: { imageUrl, imageName } },
    { new: true })
}

module.exports = {
  addNew,
  update,
  getImageFilename,
  addImage
}
