import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authHelper from '../helpers/authentication';

export default ({ component: Component, roles, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            if (!authHelper.isAuthenticated()) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            return <Component {...props} />
        }} />
    );
}