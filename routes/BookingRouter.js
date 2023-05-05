const express = require("express")
const BookingRouter = express.Router()

const { 
    registerController,
    removeBooking,
    findBooking,
    showAll,
    getStatus
} = require("../controllers/bookingController")

BookingRouter.post("/register",registerController)
BookingRouter.post("/remove",removeBooking)
BookingRouter.post("/find",findBooking)
BookingRouter.get("/show",showAll)
BookingRouter.post("/status",getStatus)

module.exports = BookingRouter