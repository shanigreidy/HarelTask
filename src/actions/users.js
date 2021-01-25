import usersService from '../services/users';
import alertActions from './alers';

const getUsers = () => {
    return async dispatch => {
        try {
            const response = await usersService.getUsers();

            if (!response.ok) {
                throw Error(response.statusText);
            }
            
            return await response.json();
        } catch(err) {
            dispatch(alertActions.error(err.toString()));
        }
    }
}

export default {
    getUsers
};