import React from "react";
import MainBtn from './MainBtn'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
import slide5 from '../assets/slide5.jpg'
const HeroSlider = () => {
  return <main className="h-[80vh] bg-black">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
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
            <img className="brightness-50" src={slide5} alt="x" />
            <div className="absolute xs:p-[82px] lg:p-0 space-y-4 animate-comeDown text-white">
              <h1 className="text-4xl font-bold">Unique Outfits</h1>
              <p>Up to 30% off on all onsale products.</p>
              <hr />
              <a href="#shop" className="block">
              <MainBtn content='Shop now'/>
              </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="brightness-50" src={slide1} alt="x" />
            <div className="absolute xs:p-[82px] lg:p-0 space-y-4 text-white">
              <h1 className="text-4xl font-bold">World-class Styles</h1>
              <p>Up to 30% off on all onsale products.</p>
              <hr />
              <a href="#shop" className="block">
              <MainBtn content='Shop now'/>
              </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="brightness-50" src={slide2} alt="x" />
            <div className="absolute xs:p-[82px] lg:p-0 space-y-4 text-white">
              <h1 className="text-4xl font-bold">Awesome gadgets</h1>
              <p>Up to 30% off on all onsale products.</p>
              <hr />
              <a href="#shop" className="block">
              <MainBtn content='Shop now'/>
              </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="brightness-50" src={slide3} alt="x" />
            <div className="absolute xs:p-[82px] lg:p-0 space-y-4 text-white">
              <h1 className="text-4xl font-bold">Best-selling Products</h1>
              <p>Up to 30% off on all onsale products.</p>
              <hr />
              <a href="#shop" className="block">
              <MainBtn content='Shop now'/>
              </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="brightness-50" src={slide4} alt="x" />
            <div className="absolute xs:p-[82px] lg:p-0 space-y-4 text-white">
              <h1 className="text-4xl font-bold">Mens Fashion</h1>
              <p>Up to 30% off on all onsale products.</p>
              <hr />
              <a href="#shop" className="block">
              <MainBtn content='Shop now'/>
              </a>
            </div>
        </SwiperSlide>
      </Swiper>
    </main>;
};

export default HeroSlider;


