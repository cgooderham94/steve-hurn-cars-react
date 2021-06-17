import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImgCarousel = ({ images }) => {
    let carousel = null;

    if (images) {
        carousel = (
            <Carousel className="img-carousel" centerMode centerSlidePercentage={80} infiniteLoop showthumbs>
                { images.map(image => 
                    <div key={image.id}>
                        <img src={image.url} alt={image.title}/>
                        <Image src={image.url} alt={image.title} layout="fill" objectFit="cover"/>
                    </div>
                ) }
            </Carousel>    
        )
    }

    return carousel;
}

export default ImgCarousel;