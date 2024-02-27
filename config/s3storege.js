const aws = require('aws-sdk');
const path = require('path');
const fs = require('fs');

class S3Storage {
    cronstructor() {
        this.client = new aws.S3({
            region: process.env.AWS_DEFAULT_REGION,
        });
    }
    async uploadFile (filename, uploadFile) {
        const tmpPath = path.resolve(__dirname, '..', 'uploads', filename)
        const contentFile = fs.promises.readFile(tmpPath)
        const response = await this.client
        .putObject({
            Bucket: 'uploadimageapi',
            Body: contentFile,
            ContentType:"auto",
            Key: uploadFile,
            ACL: 'public-read',
        })
        .promise()
        .then((res)=>res)

        await fs.promises.unlink(tmpPath)
        if (response) {
            return "https://uploadimageapi.s3.amazonaws.com/";
        }
        return " "       
    } 
}

module.exports = S3Storage;