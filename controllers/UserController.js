const db = require('../models')

// Remove accessToken from response object
const returnSanitizedObject = resp => {
  resp = resp.toObject()
  delete resp.accessToken
  return resp
}

// Get current pinned repo id's
const getRepoIds = async ({ _id }) => {
  return db.User.findOne({ _id }, 'pinnedRepositories')
}

const loginFindOrCreate = async ({
  gitHubId,
  accessToken,
  photo = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
  bio = "World's greatest coder",
  location = 'Undisclosed',
  profileUrl = 'https://github.com/',
  displayName = 'Coder',
  email = 'user@example.com'
}) => {
  const res = await db.User.findOneAndUpdate(
    // Query | Updates | Create if not exists
    { gitHubId },
    { displayName, profileUrl, accessToken, email, photo, bio, location },
    { upsert: true })

  return returnSanitizedObject(res)
}

const findOne = async ({ _id }) => {
  return db.User.findOne({ _id }).populate('pinnedRepositories')
    .then(res => returnSanitizedObject(res))
}

const findOneByGitHubId = async ({ gitHubId }) => {
  return db.User.findOne({ gitHubId }).populate('pinnedRepositories')
    .then(res => returnSanitizedObject(res))
}

const findOneAndUpdate = async ({ _id }, { displayName, profileUrl, email, photo, bio, location, template, color }) => {
  const userData = { displayName, profileUrl, email, photo, bio, location, template, color }
  return db.User.findOneAndUpdate({ _id }, userData)
    .then(res => returnSanitizedObject(res))
}

const setPinnedRepos = async ({ _id }, repoIdArray) => {
  return db.User.findOneAndUpdate({ _id }, { $set: { pinnedRepositories: repoIdArray } })
    .then(res => returnSanitizedObject(res))
}

module.exports = {
  loginFindOrCreate,
  getRepoIds,
  findOne,
  findOneByGitHubId,
  findOneAndUpdate,
  setPinnedRepos
}
