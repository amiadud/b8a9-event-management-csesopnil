import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {

    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('concerts.json')
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[])

    return (
        <>
        <div className='w-9/12 mx-auto'>
            <div className='text-center'>
            <h2 className='text-4xl font-semibold'>Full Service Concert Event</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praes</p>
            </div>
            {serviceData.length}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {
                serviceData.map( data => <Service key={data.id} event={data}></Service>)
            }
            </div>
            </div>
        </>
    );
};

export default Services;