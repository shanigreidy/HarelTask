import authConstants from '../constants/authentication';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case authConstants.LOGIN_FAILURE:
            return {};
        default:
            return state
    }
}