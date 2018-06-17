const path = require('path')
const multer = require('multer')
const uuidv4 = require('uuid/v4')
const fs = require('fs')

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

const handleUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    const cb = err => {
      if (err) reject(err)
      resolve(req.file)
    }
    upload(req, res, cb)
  })
}

const deletePhoto = fileName => {
  return new Promise((resolve, reject) => {
    fs.unlink(`${uploadsFolder}${fileName}`, err => {
      if (err) reject(err)
      resolve(`${fileName} was deleted`)
    })
  })
}

module.exports = {
  handleUpload,
  deletePhoto
}
