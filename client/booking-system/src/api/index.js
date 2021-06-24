import axios from "axios";

const url = "http://localhost:5000/stadiums";

export const fetchStadiums = () => axios.get(url);
