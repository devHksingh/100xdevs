const express = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require('../db')
const router = express.Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username =req.body.username;
    const password = req.body.password;

    // check if a user/admin with this username already exist
    Admin.create({
        username: username,
        password: password
    })
    .then(()=>{
        res.json({
            message: 'Admin is created succesfully'
        })
    })

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

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({})
    res.json({
        allCourses
    })
});

module.exports = router;