


// const storage = multer.diskStorage({
    //     destination: function(req, file, cb) {
        //         cb(null, "uploads/")
        //     },
        
        //     filename: function(req, file, cb) {
            //         console.log(file);
            //         cb(null, Date.now() + path.extname(file.originalname))
            
            //     },
            
            // });
            
            // const upload = multer({storage});
            
            // module.exports = upload;
            
            // module.exports = {
                //     dest: path.resolve(__dirname, "..", "uploads" ),
                //     Storage: multer.diskStorage({
                    //         destination: (req, file, cb) => {
                        //             cb(null, path.resolve(__dirname, "..", "uploads"))
                        //         },
                        //         filename: (req, file, cb) => {
                            //             crypto.randomBytes(16, (err, hash) => {
                                //                 if (err) cb(err);
                                
                                //                 const fileName = `${hash.toString("hex")}-${file.originalname}`;
                                
                                //                 cb (null, fileName);
                                //             });
                                //         },
                                //     }), 
                                //     limits: {
                                    //         fileSize: 5 * 1024 + 1024 

                                    //     },
                                    //     fileFilter: (req, file, cb) => {
                                        //         const allowedMimes = [
                                            //             'image/jpeg',
                                            //             'image/pjpeg',
                                            //             'image/png',
                                            //             'image/gif'
                                            //         ];
                                            
                                            //         if (allowedMimes.includes(file.mimetype)) {

                                                //             cb(null, true);
//         } else {
//             cb (new Error('invalid file type.'))
//         }
//     },
// }


const multer = require("multer")
const multerS3 = require ("multer-s3")
const aws = require("aws-sdk")
const path = require("path")
const crypto = require("crypto")


const storage = {
    local: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename: function (req, file, cb) {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);
                
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                
                cb(null, file.key);
            });
        }
    }),
    s3: multerS3({
        s3: ()=>{new aws.S3()},
        bucket: 'uploadimageapi', 
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) =>{
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);
    
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
    
                cb(null, fileName);
            });
        }
    }),
};

const upload = multer({
    storage: storage["s3"],
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: function (req, file, cb) {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type.'));
        }
    }
});

module.exports = upload;


// const { S3 } = require('@aws-sdk/client-s3');
// const { S3Storage } = require('@aws-sdk/lib-storage');
// const multer = require('multer');
// const path = require('path');
// const crypto = require('crypto');

// // Configuração do cliente S3
// const s3Client = new S3({ 
//     region: process.env.AWS_DEFAULT_REGION,
//     credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY }
// });

// // Configuração do armazenamento
// const storage = {
//   local: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.resolve(__dirname, '..', 'uploads'));
//     },
//     filename: function (req, file, cb) {
//       crypto.randomBytes(16, (err, hash) => {
//         if (err) cb(err);

//         file.key = `${hash.toString('hex')}-${file.originalname}`;

//         cb(null, file.key);
//       });
//     }
//   }),
//   s3: new S3Storage({
//     client: s3Client,
//     bucket: 'uploadimageapi',
//     contentType: 'auto',
//     acl: 'public-read',
//     key: async (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, hash) => {
//           if (err) reject(err);

//           const fileName = `${hash.toString('hex')}-${file.originalname}`;

//           resolve(fileName);
//         });
//       });
//     }
//   })
// };

// // Configuração do multer
// const upload = multer({
//   storage: storage['local'], // Altere para storage['s3'] se desejar fazer upload para o S3
//   limits: {
//     fileSize: 5 * 1024 * 1024
//   },
//   fileFilter: function (req, file, cb) {
//     const allowedMimes = [
//       'image/jpeg',
//       'image/pjpeg',
//       'image/png',
//       'image/gif'
//     ];

//     if (allowedMimes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file type.'));
//     }
//   }
// });

// module.exports = upload;











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


// const multer = require('multer');
// const path = require('path');
// const crypto = require('crypto');

// const maxFileSizeMB = 2;
// const maxFileSize = maxFileSizeMB * 1024 * 1024; 

// const fileFilter = (req, file, cb) => {
//         const allowedMimes = [
//           '.jpg',
//           '.jpeg',
//           '.png',
//           '.gif'
//         ];
//         const ext = path.extname(file.originalname).toLowerCase();
//         if (allowedMimes.includes(ext)) {
//             cb(null, true);
//         } else {
//             cb(new Error('Invalid file type.'), false);
//         }
// }

// const upload = multer({
//     dest: path.resolve(__dirname, '..', 'uploads'),
//     fileFilter: fileFilter,
//     limits: maxFileSize,
//     storage: multer.diskStorage({
//         destination: (req, file, callback) => {
//             callback(null, path.resolve(__dirname, '..', 'uploads'));
//         },

//         filename: (req, file, callback) => {
//             crypto.randomBytes(16, (error, hash) => {
//                 if (error) callback(error, "")
//                 const fileName = `${hash.toString('hex')}-${file.originalname}`
//                 callback(null);
//             })
//         },
//     })
// })

// module.exports = {upload}
