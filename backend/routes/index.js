const express = require("express");
const userRouter = require("./user")
const cors = require("cors")

const router = express.Router();

app = express();
app.use(cors());
app.use(express.json());

router.use("/user",userRouter)

module.exports = router;