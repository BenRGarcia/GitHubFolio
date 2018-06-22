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

const uploadFile = ({ filename, stream }) => {
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
    return err
  }
}

const deleteMultipleFiles = ({ filenames }) => {
  console.log(`received filenames:`, filenames)
  try {
    return new Promise((resolve, reject) => {
      // make sure array of objects is passed
      if (!Array.isArray(filenames) ||
          !filenames.every(el => typeof el === 'object') ||
          !filenames.every(el => el.constructor === 'Object')) {
        reject(filenames)
      }
      const params = {
        Bucket: awsS3Bucket,
        Delete: {
          Objects: filenames
        }
      }
      const cb = (err, data) => {
        if (err) reject(err)
        console.log(`AWS S3 object deletion reponse:\n`, data)
        resolve(data)
      }
      s3.deleteObjects(params, cb)
    })
  } catch (err) {
    return err
  }
}

const deleteFile = ({ oldFilename }) => {
  console.log(`aws was asked to delete ${oldFilename}`)
  try {
    return new Promise((resolve, reject) => {
      s3.deleteObject({ Bucket: awsS3Bucket, Key: oldFilename }, (err, data) => {
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
  uploadFile,
  deleteFile,
  deleteMultipleFiles
}
