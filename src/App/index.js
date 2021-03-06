import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isMobile } from "react-device-detect";
import PrivateRoute from '../components/PrivateRoute';
import history from '../helpers/history';
import alertActions from '../actions/alers';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Edit from '../pages/Edit';

export default () => {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

    const style = {
        top: isMobile ? '200px' : '40px', 
        margin: 'auto', 
        background: 'unset', 
        border: 'unset',
        textAlign: 'center'
    }

    return (
        <div className="container">
            <div>
                    {alert?.message &&
                        <div className={`alert ${alert.type}`} style={style}>{alert.message}</div>
                    }
                <div>
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={Home} />
                            <PrivateRoute path="/edit/:id" component={Edit} />
                            <Route path="/login" component={Login} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

