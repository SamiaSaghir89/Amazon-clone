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
      <h5>Popular products in Apparel internationally</h5>
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
                        <img src="images/s-l2.jpg" className="swiper-slide-img"  />
                        <img  src="images/sl-2.jpg" className="swiper-slide-img"  />
                        <img  src="images/sl-3.jpg" className="swiper-slide-img"  />
                        <img src="images/sl-4.jpg" className="swiper-slide-img"  />
                        <img  src="images/sl-5.jpg" className="swiper-slide-img"  />
                        <img src="images/sl-6.jpg" className="swiper-slide-img"  />
                        <img src="images/sl-7.jpg" className="swiper-slide-img"  />
                        <img src="images/sl-8.jpg" className="swiper-slide-img"  />
                        <img src="images/sl-9.jpg" className="swiper-slide-img"  />
                        <img src="images/sl-10.jpg" className="swiper-slide-img"  />

                     </div>
                   

      </SwiperSlide>
      
      
    
      
      
    </Swiper>
   
    </div>
 
  );
};