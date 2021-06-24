const initialState = {
  stadiums: [],
  stadium: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...state, stadiums: action.payload };
    case "CREATE":
      return { ...state, stadium: action.payload };
    default:
      return state;
  }
};
