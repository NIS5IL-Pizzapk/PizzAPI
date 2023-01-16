const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/images/");
  },
  filename: (req, file, cb) => {
    try {
      const fileName = file.originalname.split(".")[0].split(" ").join("_");
      const extension = file.mimetype.split("/")[1];
      cb(null, `${fileName}_${Date.now()}.${extension}`);
    } catch (err) {
      console.log(err);
      cb(err, null);
    }
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter }).single(
  "image"
);
module.exports = uploadFile;
