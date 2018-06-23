const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RepositorySchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  repositoryUrl: {
    type: String,
    required: false,
    trim: true
  },
  deployedUrl: {
    type: String,
    required: false,
    minlength: 1,
    trim: true
  },
  imageUrl: {
    type: String,
    minlength: 1,
    default: 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/GitHubFolio_Thumbnail.png',
    required: false
  },
  imageFilename: {
    type: String,
    minlength: 1,
    required: false
  }
})

const Repository = mongoose.model('Repository', RepositorySchema)

module.exports = Repository
