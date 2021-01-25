import authConstants from '../constants/authentication';
import authService from '../services/authentication';
import alertActions from './alers';
import history from '../helpers/history';

const login = (user, from) => {
    return async dispatch => {
        try {
            const response = await authService.login(user);

            if (!response.ok) {
                throw Error(response.statusText);
            }
            
            const json = await response.json();
            user.password && delete user.password;
            localStorage.setItem('user', JSON.stringify({...user, token: json.token}));
            dispatch({ type: authConstants.LOGIN_SUCCESS, user });
            history.push(from);
        } catch(err) {
            dispatch({ type: authConstants.LOGIN_FAILURE, err });
            dispatch(alertActions.error(error.toString()));
        }
    }
}

export default {
    login
};