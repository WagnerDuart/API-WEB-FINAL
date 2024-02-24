const express = require("express")
const router = express.Router()

const ServiceCrontroller = require("../controller/serviceController")

router.post("/", ServiceCrontroller.create)
router.delete("/:id", ServiceCrontroller.remove)
router.get("/:id?", ServiceCrontroller.findAll)
router.put("/:id", ServiceCrontroller.update)

module.exports = router;