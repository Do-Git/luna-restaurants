import { GET_TOP_4_RESTAURANTS, SEARCH_RESTAURANTS_BY_CATEGORY, } from "../actionTypes";

const initial_state = {
  top4Restaurants: [],
  restaurants: [],
};

export const restaurantReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_TOP_4_RESTAURANTS:
      return {
        ...state,
        top4Restaurants: action.payload,
      };
      case SEARCH_RESTAURANTS_BY_CATEGORY:
            return {
                ...state,
                restaurants: action.payload
            };
    default:
      return state;
  }
};
