const jwt = require("jsonwebtoken")
const User = require("../db");
const { JWT_SECRET } = require("../config");

function userMiddleware(req,res,next){
    const authheader = req.headers.authorization;
    if(!authheader || !authheader.sartsWith('Bearer ')){
        return res.status(403).json({});
    }
    const token = authheader.split(' ')[1];
    const decoded = jwt.verify(token,JWT_SECRET);
   try{ if(decoded.userId){
        req.userId = decoded.userId;
        next();
    }}
    catch(err){
        return res.status(403).json({
        })
    }
}
module.exports = {userMiddleware}

