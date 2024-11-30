import React, {useRef, useState} from 'react';
import {ArrowRightIcon} from '@heroicons/react/solid';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/realTestimonials.css';
import {Pagination} from 'swiper/modules';

function TestimonialCard({
  video,
  objectPosition,
}: {
  video?: string;
  objectPosition?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full h-[26.25rem] overflow-hidden">
        {' '}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
          style={{objectPosition}}
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
}

function ProductCard({price, titule}: {price?: number; titule?: string}) {
  return (
    <div className="w-full flex items-center text-xs text-black bg-white rounded-md py-1 px-1 mt-4 cursor-pointer border-2 border-transparent">
      {' '}
      <img
        src="/supplement1.png"
        alt="supplement-img"
        className="h-16 w-16 mr-2 p-2 bg-neutral-100"
      />{' '}
      <span className="">
        {' '}
        {titule}
        <br />
        <span className="font-semibold">${price}</span>{' '}
      </span>{' '}
      <img
        src="/addIcon.svg"
        alt="supplement-img"
        className="h-12 w-12 p-2 ml-8 "
      />{' '}
    </div>
  );
}

function VideosContainer() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col">
          <TestimonialCard video="/testimonial1.mp4" objectPosition="50%" />
          <ProductCard titule="Magnesium L-Threonate" price={49.95} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial3.mp4" />
          <ProductCard titule="Magnesium L-Threonate" price={49.95} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial4.mp4" />
          <ProductCard titule="Magnesium L-Threonate" price={49.95} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial5.mp4" />
          <ProductCard titule="Magnesium L-Threonate" price={49.95} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial6.mp4" />
          <ProductCard titule="Magnesium L-Threonate" price={49.95} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial2.mp4" />
          <ProductCard titule="Magnesium L-Threonate" price={49.95} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export function RealTestimonialsContainer() {
  return (
    <>
      {' '}
      <div className="flex items-center justify-center py-20 px-8 bg-neutral-100 relative flex-wrap">
        <div className="w-full flex items-center justify-center">
          <div className="group flex border border-gray-300 rounded-md w-8 h-8 items-center justify-center cursor-pointer transition-colors transition-bg duration-1000 hover:bg-black">
            {' '}
            <ArrowRightIcon className="w-4 h-3 text-black transform rotate-180 group-hover:text-white" />{' '}
          </div>{' '}
          <div className="text-container flex-col text-center px-20">
            {' '}
            <p>Trusted & Proven by Science</p>{' '}
            <h1 className="text-[2.5rem] m-0 font-medium">
              Real People. Real Results.
            </h1>{' '}
            <Link to="/" className="pl-3">
              {' '}
              view all{' '}
            </Link>{' '}
          </div>
          <div className="group flex border border-gray-300 rounded-md w-8 h-8 items-center justify-center cursor-pointer transition-colors transition-bg duration-1000 hover:bg-black">
            <ArrowRightIcon className="w-4 h-3 text-black group-hover:text-white" />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-around gap-4 mt-10"></div>
        <VideosContainer />
      </div>{' '}
    </>
  );
}
