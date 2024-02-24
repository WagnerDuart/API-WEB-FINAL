const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

require("dotenv").config();

//DB
require("./db/conn")


const port = process.env.PORT || 3000

const employeeRouter = require("./routes/employee")
const serviceRouter = require("./routes/service")
const userRegisterRouter = require("./routes/user_register")
const userLoginRouter = require("./routes/user_login")


app.use("/employee", employeeRouter);

app.use("/service", serviceRouter);

app.use("/user", userRegisterRouter);

app.use("/user", userLoginRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});