const express = require('express')
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const dbconnect = require('./config/dbConnect')
const dotenv = require('dotenv').config()
const bodyparser = require('body-parser')
const morgan = require('morgan')
const jobRoute = require('./routes/jobRoute')

const app = express()
const PORT = process.env.PORT || 4000;

dbconnect()

app.use(morgan("dev"))
// Allow requests from http://localhost:5173
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use("/api/job", jobRoute)
app.use(notFound)
app.use(errorHandler)

app.use("/",(req, res) => {
    res.send("Hola from server")
})
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})