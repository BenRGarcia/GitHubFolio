const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  gitHubId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
    default: 'user@example.com',
    trim: true
  },
  profileName: {
    type: String,
    minlength: 1,
    required: true,
    default: 'Super Coder',
    trim: true
  },
  profilePageUrl: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  },
  profileImageUrl: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    minlength: 1,
    required: false,
    default: "World's best coder",
    trim: true
  },
  location: {
    type: String,
    minlength: 1,
    required: false,
    default: 'Undisclosed',
    trim: true
  },
  chosenTemplate: {
    type: String,
    required: true,
    default: 'stylized'
  },
  repositories: [{
    type: Schema.Types.ObjectId,
    ref: 'Repository'
  }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User
