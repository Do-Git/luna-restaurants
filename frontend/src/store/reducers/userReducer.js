const initial_state = {
    allUsers: [],
};

export default function userReducer(state = initial_state, action) {
    switch (action.type) {
        case 'SEARCH_ALL_USERS':
            return {
                ...state,
                allUsers: action.payload,
            };
        default:
            return state
    }
};