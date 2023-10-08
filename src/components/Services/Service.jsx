import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({event}) => {
    const {id, image, name, description} = event

    

    return (
        <>
        <div className='border hover:shadow-lg rounded-md text-center  space-y-4 my-5 '>
                <img className='rounded-t-md ' src={image} />
                <h2 className='text-lg font-semibold hover:text-red-600'><Link to={`/service-details/${id}`}>{name}</Link></h2>
                <p className='text-justify mx-2 '>
                {
                    description.length > 100 ? <p> {description.slice(0,100)}</p> :<p>{description}</p>
                }
                </p>
                <Link to={`/service-details/${id}`} className='btn hover:bg-pink-400 w-full bg-pink-600 rounded-l-none rounded-r-none text-base text-white'>More Details</Link>
        </div>
        </>
    );
};

export default Service;