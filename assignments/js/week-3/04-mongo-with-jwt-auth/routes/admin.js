const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config");
const { User } = require("../../03-mongo/db");

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    // Implement admin signup logic
    const username =req.body.username;
    const password = req.body.password;

    // check if a user/admin with this username already exist
    await Admin.create({
        username: username,
        password: password
    })
    .then(()=>{
        res.json({
            message: 'Admin is created succesfully'
        })
    })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username =req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token
        })
    }else{
        res.status(411).json({
            msg :"Worng email or password"
        })
    }
    
    

    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price

    // zod => for input validation

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message:'Course created successfully',
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;