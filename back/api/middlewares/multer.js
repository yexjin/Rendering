import multer from 'multer';

const upload = multer({ storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../front/public/img/uploads');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
   })
});

export { upload };