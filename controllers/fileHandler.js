const path = require('path')
const multer = require('multer')
const uuidv4 = require('uuid/v4')
const fs = require('fs')
const s3 = require('../controllers/awsS3')
const repository = require('../controllers/Repository')
const user = require('./User')

// Set location in which to save images
const tempFolder = path.join(__dirname, '../temp/')

// Set storage engine
const storage = multer.diskStorage({
  destination: tempFolder,
  filename: (req, file, cb) => {
    const filename = uuidv4() + path.extname(file.originalname)
    cb(null, filename)
  }
})

// Initialize upload
const uploadImage = multer({
  storage,
  limits: { fileSize: 250000 }, // 0.25 megabytes
  fileFilter: (req, file, cb) => {
    isImageFile(file, cb)
  }
}).single('repoImage')

// File type validation
const isImageFile = (file, cb) => {
  const allowedFileExt = /^.jpeg$|^.jpg$|^.png$|^.gif$/i
  const allowedMimeTypes = /^image\/jpeg$|^image\/jpg$|^image\/png$|^image\/gif$/i
  const isExtAllowed = allowedFileExt.test(path.extname(file.originalname))
  const isMimeAllowed = allowedMimeTypes.test(file.mimetype)
  return isExtAllowed && isMimeAllowed
    ? cb(null, true)
    : cb(new Error('Only `.jpeg`, `.jpg`, `.png`, and `.gif` files are accepted'))
}

const saveImageToLocalTempFolder = (req, res) => {
  return new Promise((resolve, reject) => {
    const cb = err => {
      if (err) reject(err)
      resolve(req.file)
    }
    uploadImage(req, res, cb)
  })
}

const saveHTMLToLocalTempFolder = ({ html }) => {
  return new Promise((resolve, reject) => {
    const filename = `${uuidv4()}.html`
    const filepath = `${tempFolder}${filename}`
    fs.appendFile(filepath, html, err => {
      if (err) reject(err)
      resolve(filename)
    })
  })
}

const deleteFileFromLocalTempFolder = async ({ filename }) => {
  return new Promise((resolve, reject) => {
    fs.unlink(`${tempFolder}${filename}`, err => {
      if (err) reject(err)
      resolve()
    })
  })
}

const handleImageUpload = async ({ req, res, _id }) => {
  try {
    // Save file upload to local temp folder, extract file name
    const fileData = await saveImageToLocalTempFolder(req, res)
    const { filename } = fileData
    // Create stream to upload image to AWS S3, extract public URL from AWS S3 response
    const stream = fs.createReadStream(`${tempFolder}${filename}`)
    const awsData = await s3.uploadFile({ filename, stream })
    const imageUrl = awsData.Location
    // Delete image from local temp folder
    await deleteFileFromLocalTempFolder({ filename })
    // Find old image name from DB, delete file from AWS S3 if exists
    const oldFilename = await repository.getImageFilename({ _id })
    if (oldFilename) await s3.deleteFile({ oldFilename })
    // Set new public URL and filename in DB
    return repository.addImage({ _id, imageUrl, imageFilename: filename })
  } catch (err) {
    return err
  }
}

const handleDeleteOldImages = async ({ _id }) => {
  // Query DB to get old filenames
  const userData = await user.getDataById({ _id })
  const repos = userData.repositories
  // If repos exist...
  if (repos.length > 0) {
    // ... compose array of objects with repo names
    const filenamesToDelete = repos.map(repo => {
      if (repo.imageFilename) {
        return { Key: repo.imageFilename }
      } else {
      }
    }).filter(el => typeof el !== 'undefined')
    // If previous image files exist, delete from AWS S3
    if (filenamesToDelete.length > 0) {
      return s3.deleteMultipleFiles({ filenames: filenamesToDelete })
    }
  }
  return false
}

module.exports = {
  handleImageUpload,
  saveHTMLToLocalTempFolder,
  deleteFileFromLocalTempFolder,
  handleDeleteOldImages
}
