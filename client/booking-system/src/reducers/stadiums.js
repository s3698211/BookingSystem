export default (stadiums = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return stadiums;
    case "CREATE":
      return stadiums;
    default:
      return stadiums;
  }
};
