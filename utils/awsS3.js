require('dotenv').config()
const path = require('path')
const AWS = require('aws-sdk')
const awsS3Bucket = process.env.AWS_S3_BUCKET
AWS.config.loadFromPath(path.join(__dirname, '../config/awsS3.json'))
const s3 = new AWS.S3()

/**
 * AWS S3 JavaScript SDK Doc's:
 *   - https://aws.amazon.com/sdk-for-node-js/
 *   - https://aws.amazon.com/documentation/sdk-for-javascript/
 *   - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
 */

const uploadImage = ({ filename, stream }) => {
  // Compose object for POST to AWS S3
  const params = {
    Bucket: awsS3Bucket,
    Key: filename,
    Body: stream,
    ACL: 'public-read'
  }
  // Send POST to AWS S3
  try {
    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) reject(err)
        resolve(data)
      })
    })
  } catch (err) {
    console.error(err)
    return err
  }
}

const deleteImage = ({ filename }) => {
  try {
    return new Promise((resolve, reject) => {
      s3.deleteObject({ Key: filename }, (err, data) => {
        if (err) reject(err)
        resolve(data)
      })
    })
  } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = {
  uploadImage,
  deleteImage
}
