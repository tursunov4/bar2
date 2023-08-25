import React from 'react'
import './style.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const YoutubeCarusel = () => {
  return (
    <div className='youtubecarusel'>
      <div className='youtubecarusel-line'></div>
      <h4>Классические рецепты, адаптированные под пивоварню BAVARIA</h4>
        <div className="youtubecarusel__wrapper">
        <Swiper
      // install Swiper modules

      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
        </div>
    </div>
  )
}

export default YoutubeCarusel