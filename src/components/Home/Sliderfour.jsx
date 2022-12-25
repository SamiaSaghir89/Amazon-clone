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
      <h5>Top Sellers in Baby Products for you</h5>
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
                        <img src="images/sld-1.jpg" className="swiper-slide-img"  />
                        <img  src="images/sld-2.jpg" className="swiper-slide-img"  />
                        <img  src="images/sld-3.jpg" className="swiper-slide-img"  />
                        <img src="images/sld-5.jpg" className="swiper-slide-img"  />
                        <img  src="images/sld-6.jpg" className="swiper-slide-img"  />
                        <img src="images/sld-7.jpg" className="swiper-slide-img"  />
                        <img src="images/sld-8.jpg" className="swiper-slide-img"  />
                        <img src="images/sld-9.jpg" className="swiper-slide-img"  />
                        <img src="images/sld-10.jpg" className="swiper-slide-img"  />
                        <img src="images/sld-11.jpg" className="swiper-slide-img"  />
                        <img src="images/sld-12.jpg" className="swiper-slide-img"  />
                        <img src="images/sld-13.jpg" className="swiper-slide-img"  />



                     </div>
                   

      </SwiperSlide>
      
      
    
      
      
    </Swiper>
   
    </div>
 
  );
};