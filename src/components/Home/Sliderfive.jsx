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
                        <img src="images/sld1.jpg" className="swiper-slide-img"  />
                        <img  src="images/sld2.jpg" className="swiper-slide-img"  />
                        <img  src="images/sld3.jpg" className="swiper-slide-img"  />
                        <img src="images/sld5.jpg" className="swiper-slide-img"  />
                        <img  src="images/sld6.jpg" className="swiper-slide-img"  />
                        <img src="images/sld7.jpg" className="swiper-slide-img"  />
                        <img src="images/sld8.jpg" className="swiper-slide-img"  />
                        <img src="images/sld9.jpg" className="swiper-slide-img"  />
                        <img src="images/sld10.jpg" className="swiper-slide-img"  />
                        <img src="images/sld11.jpg" className="swiper-slide-img"  />
                        <img src="images/sld12.jpg" className="swiper-slide-img"  />
                        <img src="images/sld13.jpg" className="swiper-slide-img"  />



                     </div>
                   

      </SwiperSlide>
      
      
    
      
      
    </Swiper>
   
    </div>
 
  );
};