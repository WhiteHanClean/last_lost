import React from 'react';
import NavBtn from '../components/navBtn/NavBtn';
import { Routes, Route } from 'react-router-dom'
import Lost from './Lost';
import Found from './Found';


const intro = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<NavBtn/>} />
                <Route path='/lost' element={<Lost/>} />
            </Routes>
        </div>
    );
};

export default intro;