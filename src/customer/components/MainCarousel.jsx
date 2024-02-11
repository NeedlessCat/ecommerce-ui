import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CrouselData } from '../../data/CrouselData';

export const MainCarousel = () => {
    const items = CrouselData.map((item) => 
        <img className='cursor-pointer' src={item.image} alt={item.path} />
    );

    return (
        <AliceCarousel 
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    )
}
