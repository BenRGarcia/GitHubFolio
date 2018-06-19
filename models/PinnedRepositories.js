const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PinnedRepositoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  homepageUrl: {
    type: String,
    required: false,
    trim: true
  },
  url: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  imageUrl: {
    type: String,
    minlength: 1,
    required: false
  }
})

const PinnedRepositories = mongoose.model('PinnedRepositories', PinnedRepositoriesSchema)

module.exports = PinnedRepositories
