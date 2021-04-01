import Axios from "../../axios";

export const top4RestaurantsAction = () => async (dispatch) => {
  try {
    const response = await Axios.get("home/");
    console.log(response.data.results, "responseee 4 rated");
    dispatch({ type: "TOP_4_RESTAURANTS", payload: response.data.results });
    return response;
  } catch (error) {
    console.log("Error fetching Top 4 Restaurants>", error);
    return error;
  }
};


