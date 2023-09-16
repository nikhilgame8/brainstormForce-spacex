'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const HomeCarousel = ({ data }) => {
    return (
        <div className='relative'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                  }}
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
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
            <div className="arrow-left absolute left-5 z-20 top-[45%] cursor-pointer">
                {" "}
                <ChevronLeftIcon className='w-8 h-8' />
            </div>
            <div className="arrow-right absolute right-5 z-20 top-[45%] cursor-pointer">
                <ChevronRightIcon className='w-8 h-8' />
            </div>
        </div>
    );
}

export default HomeCarousel;