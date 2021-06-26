import Booking from "../models/booking.js";
import Stadium from "../models/stadium.js";

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.log(error.message);
  }
};

export const createBooking = async (req, res) => {
  const booking = req.body;
  const newBooking = new Booking(booking);

  await Stadium.findOne({ name: booking.stadiumName }, async (err, result) => {
    //if the stadium is not exist, return an err message
    if (result == null) {
      res.status(400).json("Cannot find stadium");
    } else {
      result.calendar.push(newBooking);
      // await result.save();
      // await newBooking.save();
      // console.log(result.calendar);
      return res.status(200).json(newBooking);
    }
  });
};
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (error) {
    console.log(error.message);
  }
};
