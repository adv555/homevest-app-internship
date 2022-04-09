import S3 from 'aws-sdk/clients/s3';
import * as fs from "fs";

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

interface uploadParams {
  Bucket: any,
  Body: any,
  Key: any,
}

export function uploadFile(file: { path: fs.PathLike; originalname: any; }) {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams: uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.originalname
  }

  return s3.upload(uploadParams).promise()
}

interface downloadParams {
  Key: any,
  Bucket: any
}

export function getFileStream(fileKey: any) {
  const downloadParams: downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}
