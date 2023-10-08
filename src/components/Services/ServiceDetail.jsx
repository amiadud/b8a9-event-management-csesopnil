import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const [serviceData, setServiceData] = useState([])
    const [showData,setShowData] = useState([])



    const {id} = useParams()
    const intId = parseInt(id)
    
    useEffect(()=> {
            fetch('../concerts.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
    },[])

    const filterData = serviceData.filter(data => data.id === intId)

    return (
        <div className=''>
            <div className='relative '>
            <img src={filterData[0]?.image} alt="" />
           <div className='bg-red-500'>
           <h2 className='text-3xl absolute bottom-4 left-2 text-white '>Price: {filterData[0]?.price}</h2>
           </div>
            </div>
            <div>
            <h2 className='text-5xl font-semibold my-5'>{filterData[0]?.name}</h2>
            <p>{filterData[0]?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;