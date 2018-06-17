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
const upload = multer({ storage }).single('repoImage')

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
