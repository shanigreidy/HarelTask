import usersService from '../services/users';
import alertActions from './alers';
import history from '../helpers/history';

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

const getUserDetails = (id) => {
    return async dispatch => {
        try {
            const response = await usersService.getUserDetails(id);

            if (!response.ok) {
                throw Error(response.statusText);
            }
            
            return await response.json();
        } catch(err) {
            dispatch(alertActions.error(err.toString()));
        }
    }
}

const saveUserDetails = (userDetails, from) => {
    return async dispatch => {
        try {
            const response = await usersService.saveUserDetails(userDetails);

            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(alertActions.success('User has been updated successfully'));
            setTimeout(() => { history.push(from); }, 1000);
        } catch(err) {
            dispatch(alertActions.error(err.toString()));
        }
    }
}


export default {
    getUsers,
    getUserDetails,
    saveUserDetails
};