import urlsConstants from '../constants/urls';

const getUsers = async () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(urlsConstants.GET_USERS, requestOptions);
}

const getUserDetails = async (id) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(`${urlsConstants.GET_USER_DETAILS}/${id}`, requestOptions);
}

const saveUserDetails = async (userDetails) => {
    const { id } = userDetails;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userDetails)
    };

    return await fetch(`${urlsConstants.GET_USER_DETAILS}/${id}`, requestOptions);
}

export default {
    getUsers,
    getUserDetails,
    saveUserDetails
};