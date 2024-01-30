const express  = require("express")
const { userMiddleware } = require("../middlewares/user")
const {User, Account} = require("../db")

const accountRouter  = express.Router()

accountRouter.get("/balance",userMiddleware,async (req,res)=>{
    const user = await Account.findOne({
        userId : req.userId
    })
    if(!user){
        res.status(411).json({
            message : "Error in fetching balance"
        })
    }
    const balance = user.balance;
    req.status(200).json({
        balance
    })
})

accountRouter.post("transfer",userMiddleware,async (req,res)=>{

    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount,to} = req.body
    const account = await Account.findOne({
        userId : req.userId
    }).session(session)
    
    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Insufficient funds"
        });
    }
    const toAccount = Account.findOne({
        userID : to
    })
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Account not found"
        })
    }
    await Account.updateOne({
        userId : req.userId
    },{
        $inc : {
            balance : -amount
        }
    })
    await Account.updateOne({
        userId : to
    },{
        $inc : {
            balance : amount
        }
    })
    await session.commitTransaction();
    res.status(200).json({
        message : "Succesfully transfered"
    })
})

module.exports = {accountRouter}