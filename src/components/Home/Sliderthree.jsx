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
      <h5>International top sellers in Kitchen</h5>
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
                        <img src="images/sli-1.jpg" className="swiper-slide-img"  />
                        <img  src="images/sli-2.jpg" className="swiper-slide-img"  />
                        <img  src="images/sli-3.jpg" className="swiper-slide-img"  />
                        <img src="images/sli-5.jpg" className="swiper-slide-img"  />
                        <img  src="images/sli-6.jpg" className="swiper-slide-img"  />
                        <img src="images/sli-7.jpg" className="swiper-slide-img"  />
                        <img src="images/sli-8.jpg" className="swiper-slide-img"  />
                        <img src="images/sli-9.jpg" className="swiper-slide-img"  />
                        <img src="images/sli-10.jpg" className="swiper-slide-img"  />
                        <img src="images/sli-11.jpg" className="swiper-slide-img"  />
                        <img src="images/sli-12.jpg" className="swiper-slide-img"  />
                        <img src="images/sli-13.jpg" className="swiper-slide-img"  />



                     </div>
                   

      </SwiperSlide>
      
      
    
      
      
    </Swiper>
   
    </div>
 
  );
};