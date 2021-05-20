require('dotenv').config()
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const uuid = require('uuid').v4
const path = require('path')

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_KEY
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION

aws.config = new aws.Config();
aws.config.accessKeyId = AWS_ACCESS_KEY_ID;
aws.config.secretAccessKey = AWS_SECRET_ACCESS_KEY;
aws.config.region = AWS_BUCKET_REGION

const s3 = new aws.S3({ apiVersion: '2006-03-01' })

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'storage.aqqire.com',
        metadata: (req,file,cb) => {
            cb(null, { fieldname: file.fieldname })
        },
        key: (req,file,cb) => {
            cb(null, `${uuid()}`) //name with the file ext
        }
    })
})

module.exports = upload