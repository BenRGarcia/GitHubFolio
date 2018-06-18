require('dotenv').config()
const path = require('path')
var AWS = require('aws-sdk')

/**
 * AWS S3 JavaScript SDK Doc's:
 *   - https://aws.amazon.com/sdk-for-node-js/
 *   - https://aws.amazon.com/documentation/sdk-for-javascript/
 *   - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
 */

AWS.config.loadFromPath(path.join(__dirname, '../config/awsS3.json'))

var s3 = new AWS.S3()

var myBucket = process.env.AWS_S3_BUCKET
var myKey = 'Hello_World_Key.txt'
const params = { Bucket: myBucket, Key: myKey, Body: 'Hello!' }

s3.upload(params, function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(`Successfully uploaded data to ${myBucket}/${myKey}`)
    console.log(data)
  }
})
