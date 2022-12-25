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
      <h5>Top Sellers in Toys for you</h5>
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
                        <img src="images/ty1.jpg" className="swiper-slide-img"  />
                        <img  src="images/ty2.jpg" className="swiper-slide-img"  />
                        <img  src="images/ty3.jpg" className="swiper-slide-img"  />
                        <img src="images/ty5.jpg" className="swiper-slide-img"  />
                        <img  src="images/ty13.jpg" className="swiper-slide-img"  />
                        <img src="images/ty7.jpg" className="swiper-slide-img"  />
                        <img src="images/ty8.jpg" className="swiper-slide-img"  />
                        <img src="images/ty9.jpg" className="swiper-slide-img"  />
                        <img src="images/ty10.jpg" className="swiper-slide-img"  />
                        <img src="images/ty11.jpg" className="swiper-slide-img"  />
                        <img src="images/ty12.jpg" className="swiper-slide-img"  />


                     </div>
                   

      </SwiperSlide>
      
      
    
      
      
    </Swiper>
   
    </div>
 
  );
};