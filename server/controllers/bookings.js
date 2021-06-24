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
  try {
    await Stadium.findOne({ name: booking.stadium }, async (err, result) => {
      if (err) {
        res.status(404).json("The stadium does not exist");
      }
      result.calendar.push(newBooking);
      await result.save();
      await newBooking.save();
      console.log(result.calendar);
      res.status(200).json(newBooking);
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (error) {
    console.log(error.message);
  }
};
