import React from 'react';
import { useState } from 'react';
import s from './NavBtn.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { RequestUsers } from '../../asyncActions/addUsers';
import Header from '../Header/Header';

const NavBtn = () => {
    const [authorization, setAuthorization] = useState(true);
    const dispatch = useDispatch()
    const users = useSelector(state => state.addedUsers.user)


    const isAuthorization = () => {
        const token = localStorage.getItem("user");
        token ? setAuthorization(true) : setAuthorization(false);
    }

    return (
        <>
        <Header/>
            <div className={s.btn_nav}>
                <NavLink to={authorization ? '/lost' : '/'} >
                    <button className={s.btn} id='button' onClick={() => isAuthorization()}><span>Lost</span></button>
                </NavLink>
                <NavLink to={authorization ? '/found' : '/'} >
                    <button className={s.btn} onClick={() => isAuthorization()}><span>Found</span></button>
                </NavLink>
                <button onClick={() => dispatch(RequestUsers())}>request</button>
            </div   >
        </>
    );
};
export default NavBtn;