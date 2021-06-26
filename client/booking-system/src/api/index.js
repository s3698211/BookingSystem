import axios from "axios";

const stadiumURL = "http://localhost:5000/stadiums";
const bookingURL = "http://localhost:5000/bookings";

export const fetchStadiums = () => axios.get(stadiumURL);
export const createStadium = (newStadium) => axios.post(stadiumURL, newStadium);
export const createBooking = (newBooking) => axios.post(bookingURL, newBooking);
