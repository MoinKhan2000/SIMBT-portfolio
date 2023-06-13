import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SIS from '../../img/SIS.jpg';
import Netflix from '../../img/Netflix.jpg';
import Todo from '../../img/Todo.jpg';
import { Pagination } from 'swiper'
import 'swiper/css/pagination';
import 'swiper/css';
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Navigation } from "swiper";
function Portfolio() {
    return (
        <div className="portfolio" id='portfolio'>
            <div>
                <span>Recent Projects</span>
                <span>Portfolio</span>
            </div>
            <Swiper
                effect={"flip"}
                modules={[EffectFlip, Pagination, Navigation]}
                loop={true}
                navigation={true}
                className='mySwiper'>
                <SwiperSlide className="swiperSlide">
                    <img src={SIS} alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Netflix} alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Todo} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default Portfolio;
