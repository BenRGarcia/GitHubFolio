const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  gitHubId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: false,
    trim: true,
    unique: true
  },
  profileName: {
    type: String,
    minlength: 1,
    required: true,
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
    trim: true
  },
  location: {
    type: String,
    minlength: 1,
    required: false,
    trim: true
  },
  chosenTemplate: {
    type: String,
    required: true,
    default: 'minimalist'
  },
  chosenColor: {
    type: String,
    required: true,
    default: 'light'
  },
  Repositories: [{
    type: Schema.Types.ObjectId,
    ref: 'Repository'
  }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User
