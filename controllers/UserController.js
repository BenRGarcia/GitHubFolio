const db = require('../models')

const findOrCreate = async ({
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
    ? db.User.findOneAndUpdate({ gitHubId }, { displayName, profileUrl, accessToken, email, photo, bio, location })
    : db.User.create({ gitHubId, displayName, profileUrl, accessToken, email, photo, bio, location })
}

const findOne = async ({ gitHubId }) => {
  return db.User.findOne({ gitHubId })
    .populate('pinnedRepositories')
}

const findOneAndUpdate = async ({
  gitHubId,
  photo,
  profileUrl,
  bio,
  location,
  displayName,
  email }) => {
  return db.User.findOneAndUpdate({ gitHubId }, { displayName, profileUrl, email, photo, bio, location })
}

module.exports = {
  findOrCreate,
  findOne,
  findOneAndUpdate
}