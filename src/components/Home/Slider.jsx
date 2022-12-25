import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className='slider'>
      <div className='slider-heading'>
      <h5>Top Sellers in Books for you</h5>
      </div>
    <Swiper
      // install Swiper modules
      slidesPerView='auto'
            spaceBetween={10}
            slidesPerGroupAuto={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            
    >
     
      
      <SwiperSlide className='swiper-slide'>
      <div className='swiper-slide-img-wrapper'>
                        <img src="images/sl1.jpg" className="swiper-slide-img"  />
                        <img  src="images/s2.jpg" className="swiper-slide-img"  />
                        <img  src="images/s3.jpg" className="swiper-slide-img"  />
                        <img src="images/s5.jpg" className="swiper-slide-img"  />
                        <img  src="images/s6.jpg" className="swiper-slide-img"  />
                        <img src="images/s7.jpg" className="swiper-slide-img"  />
                        <img src="images/s8.jpg" className="swiper-slide-img"  />
                        <img src="images/s9.jpg" className="swiper-slide-img"  />
                        <img src="images/s10.jpg" className="swiper-slide-img"  />
                        <img src="images/s11.jpg" className="swiper-slide-img"  />

                     </div>
                   

      </SwiperSlide>
      
      
    
      
      
    </Swiper>
   
    </div>
 
  );
};