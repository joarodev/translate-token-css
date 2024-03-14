const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadFile = upload.single('jsonFile')

module.exports = uploadFile;