import Axios from '../../axios'

export const searchAllUsersAction = (search_string) => async (dispatch) => {
    try {
        const response = await Axios.get(search_string);
        console.log(response, 'response from user action')
        dispatch({type: 'SEARCH_ALL_USERS' , payload: response.data.results});
        return response
    } catch (error) {
        console.log('Error in searching Users>', error);
        return error
    }
};