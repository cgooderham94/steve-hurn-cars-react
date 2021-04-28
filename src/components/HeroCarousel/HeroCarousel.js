import React from 'react';

import './HeroCarousel.scss';

const HeroCarousel = (props) => {
    let slides = [];
    
    if (props.slides.length) {
        slides = props.slides.map((slide) => {
            return (
                <div className="hero-carousel__slide">
                    <div className="hero-carousel__slide-content flex flex-col">
                        <h1 className="order-2">{ slide.heading }</h1>
                        <h2 className="order-1">{ slide.overline }</h2>
    
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