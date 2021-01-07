import React, { useEffect, useState } from 'react';
import Swiper, { Pagination, Autoplay } from 'swiper';
import { SliderContainer } from './style';
import 'swiper/swiper-bundle.css';

Swiper.use([Pagination, Autoplay]);

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList = [] } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      const newSliderSwiper = new Swiper('.slider-container', {
        oop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: { el: '.swiper-pagination' }
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {bannerList.map((slider, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <div className="slider-nav">
                  <img
                    src={slider.imageUrl}
                    width="100%"
                    height="100%"
                    alt="推荐"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="before"></div>
    </SliderContainer>
  );
}

export default React.memo(Slider);
