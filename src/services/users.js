import urlsConstants from '../constants/urls';

const getUsers = async (user) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(urlsConstants.GET_USERS, requestOptions);
}

export default {
    getUsers,
};