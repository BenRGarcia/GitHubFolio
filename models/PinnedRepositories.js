const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PinnedRepositoriesSchema = new Schema({
  // Name of repo
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  // Description of repo
  description: {
    type: String,
    required: false,
    trim: true
  },
  // GitHub repo home page
  homepageUrl: {
    type: String,
    required: false,
    trim: true
  },
  // URL of deployed site
  url: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  // Thumbnail photo public URL
  imageUrl: {
    type: String,
    minlength: 1,
    required: false
  },
  // Image file name
  imageName: {
    type: String,
    minlength: 1,
    required: false
  }
})

const PinnedRepositories = mongoose.model('PinnedRepositories', PinnedRepositoriesSchema)

module.exports = PinnedRepositories
