const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require('../db')

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username= req.body.username
    const password = req.body.password

    await User.create({
        username:username,
        password:password
    })
    res.json({
        msg:"User created successfully"
    })
    
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const allCourse = await Course.find({})
    res.json({
        courses: allCourse
    })

});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    // const username = req.header.username
    const username = req.headers.username
    // input validation
    try {
        await User.updateOne({
            username:username
        },{
            "$push":{
                purchasedCourses:courseId
            }
        })
    }catch (error) {
        console.log(error);
    }
    res.json({
        message:"Purchase complete!"
    })
    
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router