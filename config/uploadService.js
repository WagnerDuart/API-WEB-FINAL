const S3Storage = require("./S3storege");

class UploadService {
    async save(file, nameFile) {
        const S3 = new S3Storage();
        const response = await S3.uploadFile(file.filename, nameFile);

        return response;
    }
}

module.exports = UploadService;