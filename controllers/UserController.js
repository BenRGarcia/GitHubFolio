const db = require('../models')

// Remove accessToken from response object
const returnSanitizedObject = resp => {
  resp = resp.toObject()
  delete resp.accessToken
  return resp
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
  const userDoesExist = await db.User.findOne({ gitHubId })
  return userDoesExist
    ? db.User.findOneAndUpdate({ _id: userDoesExist._id }, { displayName, profileUrl, accessToken, email, photo, bio, location })
      .then(res => returnSanitizedObject(res))
    : db.User.create({ gitHubId, displayName, profileUrl, accessToken, email, photo, bio, location })
      .then(res => returnSanitizedObject(res))
}

const findOne = async ({ _id }) => {
  return db.User.findOne({ _id }).populate('pinnedRepositories')
    .then(res => returnSanitizedObject(res))
}

const findOneAndUpdate = async ({ _id }, { displayName, profileUrl, email, photo, bio, location, template, color }) => {
  const userData = { displayName, profileUrl, email, photo, bio, location, template, color }
  return db.User.findOneAndUpdate({ _id }, userData)
    .then(res => returnSanitizedObject(res))
}

const setPinnedRepos = async ({ _id }, repoIdArray) => {
  return db.User.findOneAndUpdate({ _id }, { $set: { pinnedRepositories: repoIdArray } })
}

module.exports = {
  loginFindOrCreate,
  findOne,
  findOneAndUpdate,
  setPinnedRepos
}
