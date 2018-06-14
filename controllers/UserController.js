const db = require('../models')

const loginFindOrCreate = async ({ gitHubId, accessToken,
  photo = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
  bio = "World's greatest coder",
  location = 'Undisclosed',
  profileUrl = 'https://github.com/',
  displayName = 'Coder',
  email = 'user@example.com'
}) => {
  const userDoesExist = await db.User.findOne({ gitHubId })
  console.log(`from inside UserController, userDoesExist:`, userDoesExist)
  return userDoesExist
    ? db.User.findOneAndUpdate({ _id: userDoesExist._id }, { displayName, profileUrl, accessToken, email, photo, bio, location })
    : db.User.create({ gitHubId, displayName, profileUrl, accessToken, email, photo, bio, location })
}

const findOne = async ({ _id }) => {
  return db.User.findOne({ _id })
    .populate('pinnedRepositories')
}

const findOneAndUpdate = async ({
  _id,
  photo,
  profileUrl,
  bio,
  location,
  displayName,
  email }) => {
  return db.User.findOneAndUpdate({ _id }, { displayName, profileUrl, email, photo, bio, location })
}

module.exports = {
  loginFindOrCreate,
  findOne,
  findOneAndUpdate
}
