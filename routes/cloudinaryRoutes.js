const express = require('express');
const router = express.Router();

const { cloudinaryController } = require('../controller/cloudinaryController');
const multer = require('multer');

const upload = multer();
//add image
router.post('/add-img',upload.single('image'), cloudinaryController.saveImageCloudinary);

//add image
router.post('/add-multiple-img',upload.array('images',5), cloudinaryController.addMultipleImageCloudinary);

//delete image
router.delete('/img-delete', cloudinaryController.cloudinaryDeleteController);

module.exports = router;