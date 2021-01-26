import urlsConstants from '../constants/urls';

const login = async (user) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return await fetch(urlsConstants.LOGIN, requestOptions);
}

export default {
    login
};