import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {

    const [serviceData, setServiceData] = useState([])
    
    useEffect(() => {
        fetch('concerts.json')
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[])




    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={serviceData[0]?.image} alt="" />
            <h2 className='absolute text-2xl bottom-16 text-white'>{serviceData[0]?.name}</h2>
            </SwiperSlide>
        <SwiperSlide>
            <img src={serviceData[1]?.image} alt="" />
            <h2 className='absolute text-2xl bottom-16 text-white'>{serviceData[1]?.name}</h2>
        </SwiperSlide>

        <SwiperSlide>
            <img src={serviceData[2]?.image} alt="" />
            <h2 className='absolute text-2xl bottom-16 text-white'>{serviceData[2]?.name}</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={serviceData[3]?.image} alt="" />
            <h2 className='absolute text-2xl bottom-16 text-white'>{serviceData[3]?.name}</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={serviceData[4]?.image} alt="" />
            <h2 className='absolute text-2xl bottom-16 text-white'>{serviceData[4]?.name}</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={serviceData[5]?.image} alt="" />
            <h2 className='absolute text-2xl bottom-16 text-white'>{serviceData[5]?.name}</h2>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;