/* eslint-disable @typescript-eslint/no-var-requires */
import aws from 'aws-sdk'
import path from 'path'
import { Request } from 'express'
const multerS3 = require('multer-s3')
import { v4 as uuid } from 'uuid'

import multer from 'multer'

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new aws.S3({ apiVersion: '2006-03-01', region, accessKeyId, secretAccessKey })

export const upload = multer({
  storage: multerS3({
    s3,
    bucket: bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    contentDisposition: 'inline',
    acl: 'public-read',
    metadata: (req: Request, file: Express.MulterS3.File, cb: any) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req: Request, file: Express.MulterS3.File, cb: any) => {
      const ext = path.extname(file.originalname)
      cb(null, `${uuid()}${ext}`)
    },
  }),
})
