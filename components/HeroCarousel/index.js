import React from 'react';
import Image from 'next/image';

const HeroCarousel = (props) => {
    let slides = [];
    
    if (props.slides.length) {
        slides = props.slides.map((slide) => {
            let image = slide.image[0] || null;
            
            return (
                <div className="hero-carousel__slide relative h-full text-center" key={slide.id}>
                    {image && <Image src={image.url} alt={image.title} layout="fill" objectFit="cover"/>}

                    <div className="hero-carousel__slide-content absolute top-10 inset-x-2/4 w-full transform -translate-x-1/2 flex flex-col px-4 text-white">
                        <h1 className="order-2 uppercase font-bold mb-6">{ slide.heading }</h1>
                        <p className="order-1 mb-2">{ slide.overline }</p>
    
                        <p className="order-3">{ slide.body }</p>
                    </div>
                </div>
            );
        });

        return (
            <div className="hero-carousel">
                { slides }
            </div>
        );
    }

    return null;
}

export default HeroCarousel;