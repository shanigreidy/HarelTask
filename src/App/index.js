import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import history from '../helpers/history';
import alertActions from '../actions/alers';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default () => {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-md-8 offset-md-2">
                        {alert?.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                    <div className="col-md-8 offset-md-2">
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={Home} />
                                <Route path="/login" component={Login} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    );
}

