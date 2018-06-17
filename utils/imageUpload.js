const path = require('path')
const multer = require('multer')
const uuidv4 = require('uuid/v4')

// Set storage engine
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../temp/photos/'),
  filename: (req, file, cb) => {
    const fileName = file.fieldname + '-' + uuidv4() + path.extname(file.originalname)
    cb(null, fileName)
  }
})

// Init upload
const upload = multer({
  storage,
  limits: { fileSize: 100000 }, // 0.1 megabytes
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  }
}).single('repoImage')

const checkFileType = (file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|gif/
  const isExtAllowed = allowedFileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimeType = allowedFileTypes.test(file.mimetype)
  return isExtAllowed && mimeType
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

module.exports = handleUpload
