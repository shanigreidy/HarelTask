import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { userActions } from '../_actions';

export default () => {
    // const user = useSelector(state => state.auth.user);

    useEffect(() => {
        // dispatch(userActions.getAll());
    }, []);

    return (
        <div className="col-lg-8 offset-lg-2">
            {/* <h1>Hi {user.firstName}!</h1> */}
            <h1>Hi </h1>
        </div>
    );
}