import SectionTitle from "../Repeat/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";







const Testimonials = () => {


    const [review, setReview] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    // console.log(review)


    return (
        <div>
            <SectionTitle
                subTitle={'What Our Clients Say'}
                heading={'TESTIMONIALS'}>
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                {
                    review?.map(item => <SwiperSlide key={item._id}>

                        <div className="flex flex-col items-center justify-center text-center gap-4 my-10">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            />
                            <FaQuoteLeft size={70} />

                            <p>{item.details}</p>
                            <h1 className="text-red-500">{item.name}</h1>
                        </div>


                    </SwiperSlide>)
                }



            </Swiper>


        </div>
    );
};

export default Testimonials;