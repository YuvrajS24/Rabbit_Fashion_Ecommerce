const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
const rateLimit = require('express-rate-limit');
const { protect } = require('../middleware/authMiddleware')


require("dotenv").config()


const router = express.Router();



//Cloudinary configuration


cloudinary.config({

    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,

})

const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 8,                  
  message: 'Too many uploads, please try again later'
});




//Multer setup using memory storage

const storage = multer.memoryStorage();

const upload = multer({
  storage,
   limits: { fileSize: 10 * 1024 * 1024 },

  fileFilter: (req, file, cb) => {

    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  }
});


router.post("/", uploadLimiter, protect, upload.single("image"), async(req, res)=>{

try{

    if(!req.file){

        return res.status(400).json({message:"No file uploaded"});

    }

    //Function to handle the stream upload to Cloudinary

    const streamUpload = (fileBuffer) =>{

        return new Promise((resolve , reject)=>{

            const stream = cloudinary.uploader.upload_stream((error, result)=>{

                if(result) {

                    resolve(result);
               
                }else{

                    reject(error);
                }
                 
            })

            //Use streamifier to covert file buffer to a stream 

            streamifier.createReadStream(fileBuffer).pipe(stream);


        });
    };


    //Call the streamUpload function 


    const result = await streamUpload(req.file.buffer);


    // Respond with the uploaded image URL


    res.json({imageUrl: result.secure_url});


}catch(error){

    console.error(error);

    res.status(500).json({message:"Server Error"})


}


})


module.exports = router;




