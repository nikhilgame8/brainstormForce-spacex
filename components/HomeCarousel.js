'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const HomeCarousel = ({data}) => {
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative'>
                                <div className='relative w-full h-screen'>
                                    <img
                                        src={item.flickr_images[0]}
                                        // className='w-full h-screen'
                                        fill
                                        className="object-cover w-full"
                                    />
                                </div>
                                <div className='absolute h-full top-0 left-0 flex justify-center items-center w-full backdrop-brightness-50'>
                                    <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
                                        <p className="mt-4 text-xl text-white">
                                            UPCOMING LAUCH
                                        </p>
                                        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">{item.name}</h1>
                                        <p className='py-4'>{item.description}</p>
                                        <a
                                            href={item.wikipedia}
                                            target='_blank'
                                            className="mt-8 inline-block text-white rounded hover:text-black px-8 py-3 text-base font-medium border-2 border-white hover:bg-gray-100"
                                        >
                                            LEARN MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default HomeCarousel;