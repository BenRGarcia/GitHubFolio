const path = require('path')
const multer = require('multer')
const uuidv4 = require('uuid/v4')
const fs = require('fs')
const s3 = require('../utils/awsS3')
const { Repository } = require('../controllers')

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

const deleteFileFromLocalTempFolder = async ({ filename }) => {
  return new Promise((resolve, reject) => {
    fs.unlink(`${uploadsFolder}${filename}`, err => {
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
    const stream = fs.createReadStream(`${uploadsFolder}${filename}`)
    const awsData = await s3.uploadFile({ filename, stream })
    const imageUrl = awsData.Location
    // Delete image from local temp folder
    await deleteFileFromLocalTempFolder({ filename })
    // Find old image name from DB, delete file from AWS S3 if exists
    const oldFilename = await Repository.getImageFilename({ _id })
    if (oldFilename) await s3.deleteFile({ oldFilename })
    // Set new public URL and filename in DB
    return Repository.addImage({ _id, imageUrl, imageName: filename })
  } catch (err) {
    return err
  }
}

module.exports = handleImageUpload
