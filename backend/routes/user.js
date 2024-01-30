const express = require("express")
const zod = require("zod")
const userRouter = express.Router();
const {User, Account} = require("../db")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { userMiddleware } = require("../middlewares/user");

const signupBody = zod.object({
    username: zod.string().email(),
	password: zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

userRouter.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        usersname : req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            messgae : "Email already exists"
        })
    }
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;
    let random = Math.floor(Math.random() * 10000) + 1
    const account = await Account.create({
        userId : userId,
        balance : random
    })
    const token = jwt.sign({userId : userId},JWT_SECRET);
    res.status(200).json({
        message : "User added successfully",
        token : token
    })
})
const signinBody = zod.object({
    username : zod.string().email(),
    password : zod.string()
})

userRouter.post("signin",async (req,res)=>{
    const {success} = signinBody.safeParse(req.body)
    if(!success){
        return res.status(404).json({
            message : "Invalid inputs"
        })
    }
    const existingUser = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(!existingUser){
        return res.status(411).json({
            message : "User not found"
        })
    }
    const token = jwt.sign({userId : existingUser._id},JWT_SECRET);
    return res.status(200).json({
        token : token
    })
})
const updateBody = zod.object({
    firstName : zod.string().optional(),
    lastName : zod.string().optional(),
    password : zod.string().optional()
})

userRouter.put("/update",userMiddleware,async (req,res)=>{
    const {success} = updateBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message : "Error while updating information"
        })
    }
    const userId = req.userId;
    const update = await User.updateOne(req.body,{_id:userId})
    res.status(200).json({
        message : "Updated Successfully!"
    })
})

userRouter.get("/bulk",userMiddleware,async (req,res)=>{
    const name = req.query.filter;
    const users = await User.find({
        $or : [{firstname : {"$regex":name}},
            {lastName : {"$regex":name}}
        ]
    })
    res.status(200).json({
        users : users.map(function(user){
            return ({
                username : user.username,
                firstName : user.firstName,
                lastName : user.lastName,
                _id : user._id
            })
        })
    })
})

module.exports = {userRouter}