import axios from "axios";

const url = "http://localhost:5000/stadiums";

const fetchStadiums = () => axios.get(url);
