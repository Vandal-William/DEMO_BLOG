const multer = require('multer');


const fileStorageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },    
});

const upload = multer({storage : fileStorageConfig });

module.exports = upload;

