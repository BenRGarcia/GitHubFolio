const { User } = require('../models')

const associateRepositories = ({ _id, repoIds }) => {
  return User.findOneAndUpdate({ _id }, { $set: { Repositories: repoIds } })
}

const getRepositoryIds = ({ _id }) => {
  return User.findOne({ _id }, 'Repositories')
}

const getUserDataById = ({ _id }) => {
  return User.findOne({ _id })
    .populate('Repositories')
}

const getUserDataByGitHubId = ({ gitHubId }) => {
  return User.findOne({ gitHubId })
    .populate('Repositories')
}

const loginWithGithub = ({
  gitHubId,
  accessToken,
  location,
  bio,
  photo,
  profileUrl,
  displayName,
  email
}) => {
  return User.findOneAndUpdate(
    { gitHubId },
    {
      profileName: displayName,
      profilePageUrl: profileUrl,
      profileImageUrl: photo,
      accessToken,
      email,
      bio,
      location
    },
    { upsert: true })
}

const updateUserData = ({
  _id,
  profileName,
  profilePageUrl,
  email,
  photo,
  bio,
  location,
  chosenTemplate,
  chosenColor
}) => {
  return User.findOneAndUpdate(
    { _id },
    {
      profileName,
      profilePageUrl,
      email,
      photo,
      bio,
      location,
      chosenTemplate,
      chosenColor
    }
  )
}

module.exports = {
  loginWithGithub,
  getRepositoryIds,
  getUserDataById,
  getUserDataByGitHubId,
  updateUserData,
  associateRepositories
}
