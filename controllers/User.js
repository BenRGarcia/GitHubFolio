const { User } = require('../models')

// Remove accessToken from response object
const sanitizeObject = resp => {
  resp = resp.toObject()
  delete resp.accessToken
  return resp
}

// Get current pinned repo id's
const getRepoIds = async ({ _id }) => {
  return User.findOne({ _id }, 'pinnedRepositories')
}

const loginUser = async ({
  gitHubId,
  accessToken,
  photo = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
  bio = "World's greatest coder",
  location = 'Undisclosed',
  profilePageUrl = 'https://github.com/',
  profileName = 'Coder',
  email = 'user@example.com'
}) => {
  const res = await User.findOneAndUpdate(
    { gitHubId },
    { profileName, profilePageUrl, accessToken, email, photo, bio, location },
    { upsert: true })

  return sanitizeObject(res)
}

const getUserDataById = async ({ _id }) => {
  return User.findOne({ _id }).populate('pinnedRepositories')
    .then(res => sanitizeObject(res))
}

const getUserDataByGitHubId = async ({ gitHubId }) => {
  return User.findOne({ gitHubId }).populate('pinnedRepositories')
    .then(res => sanitizeObject(res))
}

const updateUserData = async ({ _id }, { profileName, profilePageUrl, email, photo, bio, location, template, color }) => {
  const userData = { profileName, profilePageUrl, email, photo, bio, location, template, color }
  return User.findOneAndUpdate({ _id }, userData)
    .then(res => sanitizeObject(res))
}

const addPinnedRepos = async ({ _id }, repoIdArray) => {
  return User.findOneAndUpdate({ _id }, { $set: { pinnedRepositories: repoIdArray } })
    .then(res => sanitizeObject(res))
}

module.exports = {
  loginUser,
  getRepoIds,
  getUserDataById,
  getUserDataByGitHubId,
  updateUserData,
  addPinnedRepos
}
