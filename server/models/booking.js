import mongoose from "mongoose";

const Schema = mongoose.Schema;
const BookingSchema = new Schema({
  date: Date,
  start: String,
  end: String,
  owner: String,
  belongTo: {
    type: Schema.Types.ObjectId,
    ref: "Stadium",
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
