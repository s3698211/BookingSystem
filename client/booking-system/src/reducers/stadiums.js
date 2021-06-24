export default (stadiums = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return stadiums;
    default:
      return stadiums;
  }
};
