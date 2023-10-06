import React from 'react';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Root = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;