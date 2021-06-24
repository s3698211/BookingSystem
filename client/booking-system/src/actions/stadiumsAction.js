import * as api from "../api";

//Acion Creators
export const getStadiums = () => async (dispatch) => {
  try {
    //we always have a reponse, and inside it has a data object
    const { data } = await api.fetchStadiums();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStadium = (post) => async (dispatch) => {
  try {
    const { data } = await api.createStadium(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.mesage);
  }
};
