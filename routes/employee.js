const express = require("express")
const router = express.Router()

const upload = require("../config/multer")

const EmployeeController = require("../controller/employeeController")

router.post("/", upload.single("file"), EmployeeController.create)
router.get("/:id?", EmployeeController.findAll);
router.delete("/:id", EmployeeController.remove)
router.put("/:id", upload.single("file"), EmployeeController.update)

module.exports = router;