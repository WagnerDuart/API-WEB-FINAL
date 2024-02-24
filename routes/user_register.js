const express = require("express")
const router = express.Router()

const UserCrontroller = require("../controller/userController")

router.post("/auth/register", UserCrontroller.registerUser)

module.exports = router;