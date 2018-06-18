require('dotenv').config()
// https://aws.amazon.com/sdk-for-node-js/
var AWS = require('aws-sdk')

var s3 = new AWS.S3()

// Bucket names must be unique across all S3 users

var myBucket = process.env.AWS_S3_BUCKET
var myKey = process.env.AWS_S3_KEY

s3.createBucket({ Bucket: myBucket }, function (err, data) {
  if (err) {
    console.log(err)
  } else {
    let params = { Bucket: myBucket, Key: myKey, Body: 'Hello!' }

    s3.putObject(params, function (err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log('Successfully uploaded data to myBucket/myKey')
        console.log(data)
      }
    })
  }
})
