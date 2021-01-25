import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import usersActions from '../../actions/users';
import { Table } from './config';

export default () => {
    const user = useSelector(state => state.authentication.user);
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();

    const fetchUsersData = async () => {
        //try catch - TODO
        const usersData = await dispatch(usersActions.getUsers());
        setUsers(usersData);
    }

    useEffect(() => {
        fetchUsersData();
    }, []);

    const { columns, options } = Table;
    
    return (
        <div className="col-lg-8 offset-lg-2">
            <h3>Hi {user?.firstName || ''}!</h3>
            {                
                users.length > 0  && 
                    <MUIDataTable title={'Users Table'} data={users} columns={columns} options={options} />
            }
        </div>
    );
}