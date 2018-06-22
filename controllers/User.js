const { User } = require('../models')

const associateRepositories = ({ _id, repoIds }) => {
  return User.findOneAndUpdate(
    { _id },
    { $set: { repositories: repoIds } },
    { new: true })
}

const getRepositoryIds = ({ _id }) => {
  return User.findOne({ _id }, 'repositories')
}

const getDataById = ({ _id }) => {
  return User.findOne({ _id })
    .populate('repositories')
}

const getDataByGitHubId = ({ gitHubId }) => {
  return User.findOne({ gitHubId })
    .populate('repositories')
}

const loginWithGithub = async ({
  gitHubId,
  accessToken,
  location,
  bio,
  profileImageUrl,
  profilePageUrl,
  profileName,
  email
}) => {
  return User.findOneAndUpdate(
    { gitHubId },
    {
      profileName,
      profilePageUrl,
      profileImageUrl,
      accessToken,
      email,
      bio,
      location
    },
    { upsert: true })
}

const updateData = (
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
    },
    { new: true })
}

module.exports = {
  loginWithGithub,
  getRepositoryIds,
  getDataById,
  getDataByGitHubId,
  updateData,
  associateRepositories
}
