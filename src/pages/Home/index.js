import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { isMobile } from "react-device-detect";
import history from '../../helpers/history';
import usersActions from '../../actions/users';
import alertActions from '../../actions/alers';
import { Table } from './config';

export default () => {
    const user = useSelector(state => state.authentication.user);
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();

    const fetchUsersData = async () => {
        try {
            const usersData = await dispatch(usersActions.getUsers());
            setUsers(usersData);
        } catch (err){
            dispatch(alertActions.error(err.toString()));
        }
    }

    useEffect(() => {
        fetchUsersData();
    }, []);

    const { columns, options } = Table;
    options.onRowClick = rowData => history.push(`/edit/${rowData[0]}`);
    options.responsive = isMobile ? 'simple' : 'vertical';

    return (
        <div style={{ margin: isMobile ? '30% auto' : '5% auto 0'}}>
            <h3 style={{ marginBottom: '50px'}}>Hi {user?.firstName || ''}!</h3>
            {                
                users.length > 0  && 
                    <MUIDataTable title={'Users Table'} data={users} columns={columns} options={options} />
            }
        </div>
    );
}