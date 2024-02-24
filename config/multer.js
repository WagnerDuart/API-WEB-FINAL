const multer = require("multer")

const path = require("path")


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/")
    },

    filename: function(req, file, cb) {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))

    },

});

const upload = multer({storage});

module.exports = upload;


// import multer from 'multer';
// import { extname, resolve } from 'path';

// const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// export default {
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
//       return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
//     }
//     return cb(null, true);
//   },
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, resolve(_dirname, '..', '..', 'uploads', 'images'));
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}${aleatorio()}${extname(file.originalname)}`);
//     },
//   }),
// };