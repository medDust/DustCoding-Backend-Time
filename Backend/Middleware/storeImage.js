import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images/Articles/");
  },
  filename: (req, file, callback) => {
    const name = `${Date.now()}-${file.originalname}`;
    callback(null, name);
    //console.log("5ach hna wala le", callback(null, name));
  },
});

const uploads = multer({ storage: storage });
export default uploads;
