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
        <div>
            <div className='space-y-4 my-2'>
            <img src={filterData[0]?.image} alt="" />
            <h2 className='text-4xl'>{filterData[0]?.name}</h2>
            <p>{filterData[0]?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;