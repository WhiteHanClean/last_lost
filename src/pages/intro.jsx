import React from 'react';
import { Route, Routes } from 'react-router-dom';

const intro = () => {
    return (
        <div>
            <Routes>  
                <Route path='/' element={<Found/>} /> 
                <Route path='/foundItem' element={<Found/>} /> 
                <Route path='/lostItem' element={<Found/>} /> 
                <Route path='/personnaiInfo' element={<Found/>} /> 
                <Route path='/database' element={<Found/>} /> 
                <Route path='/signIn' element={<Found/>} /> 
            </Routes>
        </div>
    );
};

export default intro;