import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic4 from '../../img/profilePic4.jpg';
import profilePic3 from '../../img/profilePic3.jpg';
import profilePic2 from '../../img/profilePic2.jpg';
import profilePic1 from '../../img/profilePic1.jpg';
import './Testimonials.css';
import { Pagination } from 'swiper';
// import '../Portfolio/Portfolio/portfolio.css';
// import '../../Components/Portfolio/Portfolio.css';
import 'swiper/css/pagination';
import 'swiper/css'
function Testimonials() {
    const clients = [
        {
            img: profilePic1,
            review: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusamus, sed, ex quisquam repellat reprehenderit perferendis sapiente necessitatibus illum, labore inventore culpa dolore accusantium.",
        },
        {
            img: profilePic2,
            review: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusamus, sed, ex quisquam repellat reprehenderit perferendis sapiente necessitatibus illum, labore inventore culpa dolore accusantium.",
        },
        {
            img: profilePic3,
            review: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusamus, sed, ex quisquam repellat reprehenderit perferendis sapiente necessitatibus illum, labore inventore culpa dolore accusantium.",
        },
        {
            img: profilePic4,
            review: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusamus, sed, ex quisquam repellat reprehenderit perferendis sapiente necessitatibus illum, labore inventore culpa dolore accusantium.",
        }
    ]
    return (
        <div className="t-wrapper" id='testimonial'>
            <div className="t-heading">
                <span>Client always get</span>
                <span> Exceptional Work </span>
                <span>from me... </span>
                <div className="blur t-blur1" ></div>
                <div className='blur t-blur2' ></div>
            </div>
            {/* Slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" className='image' />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Testimonials;
