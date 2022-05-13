import multer from "multer";



const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");

    callback(null, Date.now() + name);
  },
});

const uploads = multer({ storage: storage }).single("image");

export default uploads;
