const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profilePics/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = uuidv4();
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);
  if (ext && mime) cb(null, true);
  else cb(new Error("Only images (jpeg, jpg, png) are allowed."));
};
const limits = {
  fileSize: 1024 * 1024 * 5,
};
const multerConfig = {
  storage,
  fileFilter,
  limits,
};

const upload = multer(multerConfig);

module.exports = {
  single: (fieldName) => {
    return upload.single(fieldName); // ✅ return added
  },
  arrayUpload: (fieldName, maxCount) => {
    return upload.array(fieldName, maxCount);
  },
  fieldsUpload: (fields) => {
    return upload.fields(fields);
  },
};
