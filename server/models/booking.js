import mongoose from "mongoose";

const Schema = mongoose.Schema;
const BookingSchema = new Schema({
  date: { type: Date },
  start: { type: String },
  end: { type: String },
  owner: { type: String },
  stadiumName: { type: String },
});

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
