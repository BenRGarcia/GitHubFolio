const path = require('path')
const multer = require('multer')
const uuidv4 = require('uuid/v4')
const fs = require('fs')
const s3 = require('./awsS3')
const PinnedRepos = require('../controllers/PinnedRepositoryController')

// Set location in which to save images
const uploadsFolder = path.join(__dirname, '../temp/photos/')

// Set storage engine
const storage = multer.diskStorage({
  destination: uploadsFolder,
  filename: (req, file, cb) => {
    const fileName = file.fieldname + '-' + uuidv4() + path.extname(file.originalname)
    cb(null, fileName)
  }
})

// Initialize upload
const upload = multer({
  storage,
  limits: { fileSize: 250000 }, // 0.25 megabytes
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  }
}).single('repoImage')

// File type validation
const checkFileType = (file, cb) => {
  const allowedFileExt = /^.jpeg$|^.jpg$|^.png$|^.gif$/i
  const allowedMimeTypes = /^image\/jpeg$|^image\/jpg$|^image\/png$|^image\/gif$/i
  const isExtAllowed = allowedFileExt.test(path.extname(file.originalname))
  const isMimeAllowed = allowedMimeTypes.test(file.mimetype)
  return isExtAllowed && isMimeAllowed
    ? cb(null, true)
    : cb(new Error('Only `.jpeg`, `.jpg`, `.png`, and `.gif` files are accepted'))
}

const saveFileToLocalTempFolder = (req, res) => {
  return new Promise((resolve, reject) => {
    const cb = err => {
      if (err) reject(err)
      resolve(req.file)
    }
    upload(req, res, cb)
  })
}

const deleteFileFromLocalTempFolder = async ({ filename }) => {
  return new Promise((resolve, reject) => {
    fs.unlink(`${uploadsFolder}${filename}`, err => {
      if (err) reject(err)
      resolve()
    })
  })
}

const handleUpload = async ({ req, res, _id }) => {
  try {
    // Save file upload to local temp folder, extract file name
    const fileData = await saveFileToLocalTempFolder(req, res)
    const { filename } = fileData

    // Create stream to upload image to AWS S3, extract public URL from AWS S3 response
    const stream = fs.createReadStream(`${uploadsFolder}${filename}`)
    const awsData = await s3.uploadImage({ filename, stream })
    const imageUrl = awsData.Location

    // Delete image from local temp folder
    await deleteFileFromLocalTempFolder({ filename })

    // Find old image name from DB, delete file from AWS S3 if exists
    const oldFilename = await PinnedRepos.getOldPhotoFileName({ _id })
    if (oldFilename) {
      const deletedImage = await s3.deleteImage({ oldFilename })
      console.log(`\n=====\nFor curiosity's sake, deletedImage response from AWS S3:\n`, deletedImage)
    } else { console.log(`previous file name did not exist`) }

    // Set new public URL and filename in DB
    return PinnedRepos.addPhoto({ _id, imageUrl, imageName: filename })
  } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = handleUpload
