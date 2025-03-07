   const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
// const authMiddleware = require('../middleware/auth.middleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Save the file temporarily in the 'uploads' directory
const postController = require('../controller/post.controller');
const userController = require('../controller/user.controller');

router.post('/signup', [
    body('username').isLength({ min: 3 }).withMessage('Username should be atleast 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 3 }).withMessage('Password should be atleast 5 characters long'),
], userController.signupUser);

router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 3 }).withMessage('Password should be atleast 5 characters long'),
], userController.loginUser);


router.post('/create', upload.single('picture'), postController.createPost);


router.get('/', postController.getAllPosts);

module.exports = router;
