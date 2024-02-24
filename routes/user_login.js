const express = require("express")
const router = express.Router()

const UserCrontroller = require("../controller/userController")

router.post("/auth/login", UserCrontroller.authenticLogin)

module.exports = router;


