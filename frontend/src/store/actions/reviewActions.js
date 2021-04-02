import Axios from '../../axios'

export const searchAllReviewsAction = (search_string) => async (dispatch) => {
    try {
        const response = await Axios.get(search_string);
        console.log(response, 'response from reviews action')
        dispatch({type: 'SEARCH_ALL_REVIEWS', payload: response.data.results});
        return response
    } catch (error) {
        console.log('Error in searching Reviews>', error);
        return error
    }
};