
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import bannar1 from '../assets/home/01.jpg'
import bannar2 from '../assets/home/02.jpg'
import bannar3 from '../assets/home/03.png'
import bannar4 from '../assets/home/04.jpg'
import bannar5 from '../assets/home/05.png'

const Banner = () => {
    return (
        <div >
            <Carousel>
                <div>
                    <img src={bannar1} />
                </div>
                <div>
                    <img src={bannar2} />
                </div>
                <div>
                    <img src={bannar3} />
                </div>
                <div>
                    <img src={bannar4} />
                </div>
                <div>
                    <img src={bannar5} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;