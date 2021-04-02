const initial_state = {
    searchReviewResults: [],
  };
  
  export default function reviewReducer(state = initial_state, action)  {
    switch (action.type) {
      case 'SEARCH_ALL_REVIEWS':
        return {
          ...state,
          searchReviewResults: action.payload,
        };
      default:
        return state;
    }
}