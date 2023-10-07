import React from 'react';
import useAuth from '../../hooks/useAuth';
import Banner from '../../components/Banner/Banner';
import Service from '../../components/Services/Service';
import Services from '../../components/Services/Services';

const Home = () => {


    const {name} = useAuth()

    return (
        <>
        <div >
            <div className='text-center'>
            <h2 className='text-4xl font-semibold'>{name}</h2>
            <Banner></Banner>
            <h2 className='text-4xl font-semibold my-6'>Our Service </h2>
            </div>
            <Services></Services>
            </div>
        </>
    );
};

export default Home;