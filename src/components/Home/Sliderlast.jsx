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
      <h5>Popular products in Beauty internationally</h5>
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
                        <img src="images/ls1.jpg" className="swiper-slide-img"  />
                        <img src="images/ls2.jpg" className="swiper-slide-img"  />
                        <img src="images/ls3.jpg" className="swiper-slide-img"  />
                        <img src="images/ls4.jpg" className="swiper-slide-img"  />
                        <img src="images/ls5.jpg" className="swiper-slide-img"  />
                        <img src="images/ls6.jpg" className="swiper-slide-img"  />
                        <img src="images/ls7.jpg" className="swiper-slide-img"  />
                        <img src="images/ls8.jpg" className="swiper-slide-img"  />
                        <img src="images/ls9.jpg" className="swiper-slide-img"  />
                        <img src="images/ls9.jpg" className="swiper-slide-img"  />
                        <img src="images/ls10.jpg" className="swiper-slide-img"  />
                        <img src="images/ls11.jpg" className="swiper-slide-img"  />
                        <img src="images/ls12.jpg" className="swiper-slide-img"  />
                        <img src="images/ls13.jpg" className="swiper-slide-img"  />
                        <img src="images/ls14.jpg" className="swiper-slide-img"  />

                     </div>
                   

      </SwiperSlide>
      
      
    
      
      
    </Swiper>
   
    </div>
 
  );
};