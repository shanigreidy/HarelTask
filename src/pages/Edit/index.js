import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { isMobile } from "react-device-detect";
import usersActions from '../../actions/users';
import alertActions from '../../actions/alers';
import Inputs from '../../components/pages/edit/Inputs';

export default ({ location, match }) => {
    const { id } = match.params || {};
    const [userDetails, setUserDetails] = useState({});
    const [isSaveInProccess, setIsSaveInProccess] = useState(false);
    const dispatch = useDispatch();

    const fetchUserDetails = async () => {
        try {
            const userDetails = await dispatch(usersActions.getUserDetails(id));
            setUserDetails(userDetails);
        } catch (err){
            dispatch(alertActions.error(err.toString()));
        }
        
    }

    useEffect(() => {
        id && fetchUserDetails();
    }, []);

    const handleChange = ({ name, value }) => {
        setUserDetails(userDetails => ({ ...userDetails, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSaveInProccess(true);
        const { from } = location.state || { from: { pathname: "/" } };
        dispatch(usersActions.saveUserDetails(userDetails, from));
    }

    return (
        <div className={ isMobile ? "col-md-8" : "col-md-5"} style={{ margin: isMobile ? '50% auto' : '10% auto'}}>
            <h2 style={{ marginBottom: '10px'}}>Edit User</h2>
            {
                Object.keys(userDetails).length > 0 &&
                    <form name="form" onSubmit={handleSubmit}>
                        <Inputs objData={userDetails} handleChange={e => handleChange(e.target)}/>
                        <div className="form-group" style={{ display: 'flex' }}>
                            <button className="btn btn-primary" style={{width: '50%', margin: '20px auto', height: '50px'}}>
                                {
                                    isSaveInProccess && <span className="spinner-border spinner-border-sm mr-1"></span>
                                }
                                Save
                            </button>
                        </div>
                    </form>
            }
        </div>
    );
}