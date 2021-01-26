import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isMobile } from "react-device-detect";
import authActions from '../../actions/authentication';
import authHelper from '../../helpers/authentication';
import Inputs from '../../components/pages/login/Inputs';

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

    const handleChange = ({ name, value }) => {
        setInputsFields(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsloggingInProccess(true);
        const { from } = location.state || { from: { pathname: "/" } };
        dispatch(authActions.login(inputsFields, from));
    }

    return (
        <div className={ isMobile ? "col-md-8" : "col-md-5"} style={{ margin: isMobile ? '50% auto' : '10% auto'}}>
            {
                authHelper.isAuthenticated()
                ?
                <h4>You are Already Logged in :)</h4>
                :
                <div>
                    <h2 style={{ marginBottom: '10px'}}>Login</h2>
                    <form name="form" onSubmit={handleSubmit}>
                        <Inputs inputsFields={inputsFields} handleChange={e => handleChange(e.target)} />
                        <div className="form-group" style={{ display: 'flex' }}>
                            <button className="btn btn-primary" style={{width: '50%', margin: '20px auto', height: '50px'}}>
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