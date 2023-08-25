import React from 'react'
import './style.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react'
import buttle1 from "../../../assets/Images/png/ybutul1.png"
import prev from '../../../assets/Images/svg/prev.svg'
import next from '../../../assets/Images/svg/next.svg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const YoutubeCarusel = () => {
  return (
    <div className='youtubecarusel'>
      <div className='youtubecarusel-line'></div>
      <h4>Классические рецепты, адаптированные под пивоварню BAVARIA</h4>
        <div className="youtubecarusel__wrapper">
        <Swiper
        className='youtubecarusel__swipper'
      modules={[Navigation, Pagination,  A11y]}
    
       centerInsufficientSlides
      breakpoints={{
        300:{
          slidesPerView:1
        },
        960:{
          slidesPerView:2
        },    
        1388:{
          slidesPerView:3
        }
      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <img className='youtubecarusel__wrapper-prev' src={prev} alt="sdfasf" />
      <img className='youtubecarusel__wrapper-next' src={next} alt="sdfasf" />
      <SwiperSlide className='youtubecarusel__swipper-slide'>
        <div className='youtubecarusel__swipper-wrap'>
          <h4>Пшеничное пиво</h4>
          <p>Открыть рецепт</p>
          <img src={buttle1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='youtubecarusel__swipper-slide'>
        <div className='youtubecarusel__swipper-wrap'>
          <h4>Пшеничное пиво</h4>
          <p>Открыть рецепт</p>
          <img src={buttle1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='youtubecarusel__swipper-slide'>
        <div className='youtubecarusel__swipper-wrap'>
          <h4>Пшеничное пиво</h4>
          <p>Открыть рецепт</p>
          <img src={buttle1} alt="" />
        </div>
      </SwiperSlide>
      
      <SwiperSlide className='youtubecarusel__swipper-slide'>
        <div className='youtubecarusel__swipper-wrap'>
          <h4>Пшеничное пиво</h4>
          <p>Открыть рецепт</p>
          <img src={buttle1} alt="" />
        </div>
      </SwiperSlide>
      
   
    </Swiper>
        </div>
    </div>
  )
}

export default YoutubeCarusel