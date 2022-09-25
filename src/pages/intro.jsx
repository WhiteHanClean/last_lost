import React from 'react';
import NavBtn from '../components/navBtn/NavBtn';
import { Routes, Route } from 'react-router-dom'
import Lost from './Lost';
import FoundItem from './FoundItem';

const intro = () => {
    return (
            <Routes>  
                <Route path='/lost' element={<Lost/>}/>
                <Route path='/' element={<NavBtn/>} />
                <Route path='/foundItem' element={<FoundItem/>} /> 
                {/* <Route path='/lostItem' element={<Found/>} /> 
                <Route path='/personnaiInfo' element={<Found/>} /> 
                <Route path='/database' element={<Found/>} /> 
                <Route path='/signIn' element={<Found/>} />  */}
                {/* <Route path='/lost' element={<Lost/>} /> */}
            </Routes>
    );
};

export default intro;
