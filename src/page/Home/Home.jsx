import React from 'react';
import { useLoaderData } from 'react-router-dom';

import imagefile from '../../assets/img/Event Security.jpg'

const Home = () => {

    const mainData = useLoaderData()
    console.log(mainData);

    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log('object');
    }

    return (
        <>
        <div className='w-9/12 mx-auto'>
            <div className='text-center'>
            <h2 className='text-4xl font-semibold'>Full Service Concert Event</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praes</p>
            </div>
            <div className='grid grid-cols-3 gap-4 '>
            <div className='shadow-md text-center w-[270px] h-[410px] space-y-3 py-3'>
                <img className=' rounded-md mx-auto' src={imagefile} alt="" />
                <h2>Digital PR Link-Building</h2>
                <p>Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                <button onClick={handleButtonClick} className=' bg-pink-600 py-1 px-2 rounded text-base text-white'>View More</button>
            </div>
            <div className='shadow-md text-center w-[270px] h-[410px] space-y-3 py-3'>
                <img className='rounded-md mx-auto' src={imagefile} alt="" />
                <h2>Digital PR Link-Building</h2>
                <p>Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                <button onClick={handleButtonClick} className=' bg-pink-600 py-1 px-2 rounded text-base text-white'>View More</button>
            </div>
            <div className='shadow-md text-center  w-[270px] h-[410px] space-y-3 py-3'>
                <img className='rounded-md mx-auto' src={imagefile} alt="" />
                <h2>Digital PR Link-Building</h2>
                <p>Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                <button onClick={handleButtonClick} className=' bg-pink-600 py-1 px-2 rounded text-base text-white'>View More</button>
            </div>
            <div className='shadow-md text-center w-[270px] h-[410px] space-y-3 py-3'>
                <img className='rounded-md mx-auto' src={imagefile} alt="" />
                <h2>Digital PR Link-Building</h2>
                <p>Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                <button onClick={handleButtonClick} className=' bg-pink-600 py-1 px-2 rounded text-base text-white'>View More</button>
            </div>
            <div className='shadow-md text-center w-[270px] h-[410px] space-y-3 py-3'>
                <img className='rounded-md mx-auto' src={imagefile} alt="" />
                <h2>Digital PR Link-Building</h2>
                <p>Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                <button onClick={handleButtonClick} className=' bg-pink-600 py-1 px-2 rounded text-base text-white'>View More</button>
            </div>
            <div className='shadow-md text-center w-[270px] h-[410px] space-y-3 py-3'>
                <img className='rounded-md mx-auto' src={imagefile} alt="" />
                <h2>Digital PR Link-Building</h2>
                <p>Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                <button onClick={handleButtonClick} className=' bg-pink-600 py-1 px-2 rounded text-base text-white'>View More</button>
            </div>
            </div>
            </div>
        </>
    );
};

export default Home;