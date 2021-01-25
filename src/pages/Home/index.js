import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { userActions } from '../_actions';

export default () => {
    const user = useSelector(state => state.user);

    useEffect(() => {
        // dispatch(userActions.getAll());
    }, []);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h3>Hi {user.firstName || ''}!</h3>
        </div>
    );
}