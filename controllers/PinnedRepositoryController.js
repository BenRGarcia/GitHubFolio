const db = require('../models')

// const findOneAndUpdate = async ({ _id }) => {
//     return db.User.findOneAndUpdate({ _id }, { displayName, profileUrl, email, photo, bio, location })
// }

const bulkCreate = async (arrayOfObjects) => {
  const mongoDeliverable = arrayOfObjects.map(pinnedRepo => {
    const { name, description, homepageUrl, url } = pinnedRepo
    return {
      insertOne: {
        document: { name, description, homepageUrl, url }
      }
    }
  })

  return PinnedRepository.bulkWrite(mongoDeliverable)
}

const bulkUpdate = async (arrayOfObjects) => {
  const mongoDeliverable = arrayOfObjects.map(pinnedRepo => {
    const { _id, name, description, homepageUrl, url } = pinnedRepo
    return {
      updateOne: {
        filter: { _id },
        update: { name, description, homepageUrl, url }
      }
    }
  })

  return PinnedRepository.bulkWrite(mongoDeliverable)
}

module.exports = {
  // findOneAndUpdate,
  bulkCreate,
  bulkUpdate
}
