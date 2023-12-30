import { ACCOUNT_ID, ACCESS_KEY_ID, SECRET_ACCESS_KEY } from "$env/static/private"
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand
} from '@aws-sdk/client-s3'
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

const BUCKET = "kitcam"
const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
  }
})

export const load = async () => {
  const { Contents: files } = await S3.send(
    new ListObjectsV2Command({
      Bucket: BUCKET
    })
  )
  return { files }
}
