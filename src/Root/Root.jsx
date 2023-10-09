import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import AOS from 'aos'; import 'aos/dist/aos.css';

const Root = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='w-9/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};



export default Root;