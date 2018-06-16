const db = require('../models')
const User = require('./UserController')

const bulkCreate = async ({ _id }, arrayOfObjects) => {
  // Create bulk update variable
  const mongoDeliverable = arrayOfObjects.map(pinnedRepo => {
    const { name, description, homepageUrl, url } = pinnedRepo
    return {
      insertOne: {
        document: { name, description, homepageUrl, url }
      }
    }
  })

  // Add all repo's to PinnedRepositories Model
  return db.PinnedRepositories.bulkWrite(mongoDeliverable)
    // Compose array of Object ID's
    .then(resp => {
      // Compose array of new Object ID's
      let ids = Object.values(resp.insertedIds)
      // Associate repos with User
      return User.setPinnedRepos({ _id }, ids)
    })
    .catch(err => console.error(err))
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

/*
async function addComment ({ text, _id }) {
  return db.Comment.create({ text })
    .then(newComment => db.Article.findOneAndUpdate({ _id }, { $push: { comments: newComment._id } }))
    .catch(err => err)
}

async function deleteComment ({ _idComment, _idArticle }) {
  return db.Comment.findOneAndRemove({ _id: _idComment })
    .then(() => db.Article.update({ _id: _idArticle }, { $pull: { comments: _idComment } }))
    .catch(err => err)
}
 */

module.exports = {
  bulkCreate,
  bulkUpdate
}

/* Test data
[
  {
    "_id": ObjectId(asdkfhasdjkfhasdf)
    "name": "Bamazon",
    "description": "CLI store",
    "url": "www.github.com",
    "homepageUrl": "www.google.com"
  },
  {
    "name": "Burger app",
    "description": "burger store",
    "url": "www.github.com",
    "homepageUrl": "www.google.com"
  },
  {
    "name": "Pomo",
    "description": "student store",
    "url": "www.github.com",
    "homepageUrl": "www.google.com"
  },
  {
    "name": "TuneUp",
    "description": "car stuffs",
    "url": "www.github.com",
    "homepageUrl": "www.google.com"
  },
  {
    "name": "More stuff",
    "description": "stuff store",
    "url": "www.github.com",
    "homepageUrl": "www.google.com"
  },
  {
    "name": "Other stuffs",
    "description": "other stuff store",
    "url": "www.github.com",
    "homepageUrl": "www.google.com"
  }
]
 */
