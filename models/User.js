const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  gitHubId: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true,
    trim: true,
  },
  profileUrl: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  photo: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  template: {
    type: String,
    required: false,
    trim: true,
    default: 'Stylistic'
  },
  color: {
    type: String,
    required: false,
    trim: true,
    default: 'Light'
  },
  accessToken: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  pinnedRepositories: [{
    type: Schema.Types.ObjectId,
    ref: 'PinnedRepositories'
  }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User
