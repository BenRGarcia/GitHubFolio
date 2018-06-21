const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RepositorySchema = new Schema({
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
  repositoryUrl: {
    type: String,
    required: false,
    trim: true
  },
  deployedUrl: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  imageUrl: {
    type: String,
    minlength: 1,
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
