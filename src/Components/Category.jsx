import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'



const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={slide1} alt="Slide Img" />
                <h2 className='text-white-2/3 uppercase text-3xl -mt-24 text-center font-extrabold'>Salads</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="Slide Img" />
                <h2 className='text-white-2/3 uppercase text-3xl -mt-24 text-center font-extrabold'>Soups</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="Slide Img" />
                <h2 className='text-white-2/3 uppercase text-3xl -mt-24 text-center font-extrabold'>pizzas</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="Slide Img" />
                <h2 className='text-white-2/3 uppercase text-3xl -mt-24 text-center font-extrabold'>desserts</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="Slide Img" />
                <h2 className='text-white-2/3 uppercase text-3xl -mt-24 text-center font-extrabold'>Salads</h2>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;