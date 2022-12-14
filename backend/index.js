import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import userRoute from "./routes/userRoute.js"

const app = express()
mongoose.connect('mongodb://localhost:27017/myproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database connected'))

app.use(cors())
app.use(express.json())
app.use(userRoute)

app.listen(5000, () => console.log("Server running"))