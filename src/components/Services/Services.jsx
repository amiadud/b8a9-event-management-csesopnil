import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';
import Navbar from '../Navbar/Navbar';
import ServiceDetails from './ServiceDetail';

const Services = () => {

    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('concerts.json')
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[])

    return (
        <>
        <div >
            <div className='text-center'>
            {/* <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praes</p> */}
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {
                serviceData.map( data => 
                <Service key={data.id} event={data}></Service>
                )
            }
            </div>
            </div>
        </>
    );
};

export default Services;