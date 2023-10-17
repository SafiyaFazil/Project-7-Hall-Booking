import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import HallBookingRouter from './Routers/HallBooking.Router.js'

const app = express()
const PORT = 4001

app.use(bodyParser.json())
app.use(cors())
app.use("/hallBooking", HallBookingRouter);

app.listen(PORT, () => {
    console.log("My App is Listening Port: ",PORT);
})