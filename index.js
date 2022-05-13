const express = require("express")

const app = express()

const PORT = "8080"

app.get("/", (req,res) => {
    res.send("Running Admin Dashboard Management System")
})

app.listen(PORT, () => 
    console.log(`Server is up an running at ${PORT}`)
)

const dotenv = require('dotenv')
const mongoose = require("mongoose")
const cors = require("cors")

const authRoute = require('./routes/authRoutes')

dotenv.config()

mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser:true},
    () => console.log("Database Connected")
)

app.use(express.json(), cors())

app.use("/api/admin", authRoute)
