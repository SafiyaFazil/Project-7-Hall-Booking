import express from "express";
import {
  getRoomDetail,
  getRoomStatusDetail,
  getCustomerDetail,
  hallBooking,
  getHowManyTimesBooked,
} from "../Controllers/HallBooking.controller.js";

const router = express.Router()

router.get("/roomData", getRoomDetail); // Creating a Room
router.post("/bookRoom", hallBooking); // Booking a Room 
router.get("/roomStatusData", getRoomStatusDetail); // List all rooms with booked data
router.get("/customerData", getCustomerDetail); //List all customer with booked data
router.get('/howManyTimes',getHowManyTimesBooked) // List how many times a customer has booked the room

export default router;