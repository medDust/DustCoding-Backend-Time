import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = `${Date.now()}-${file.originalname}`;
    callback(null, name);
  },
});

const uploads = multer({ storage: storage });

export default uploads;
