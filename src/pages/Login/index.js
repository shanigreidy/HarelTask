import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../actions/authentication';
import authHelper from '../../helpers/authentication';
import Inputs from '../../components/login/Inputs';

export default () => {
    const [isloggingInProccess, setIsloggingInProccess] = useState(false);
    const [inputsFields, setInputsFields] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    });
    const dispatch = useDispatch();
    const location = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputsFields(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { from } = location.state || { from: { pathname: "/" } };
        dispatch(authActions.login(inputsFields, from));
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            {
                authHelper.isAuthenticated()
                ?
                <h2>You are Already Logged in :)</h2>
                :
                <div>
                <h2>Login</h2>
                    <form name="form" onSubmit={handleSubmit}>
                        <Inputs inputsFields={inputsFields} handleChange={handleChange} />
                        <div className="form-group">
                            <button className="btn btn-primary" style={{width: '100%', marginTop: '10px'}}>
                                {
                                    isloggingInProccess && <span className="spinner-border spinner-border-sm mr-1"></span>
                                }
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
}