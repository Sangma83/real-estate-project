import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img2.jpg';
import image3 from '../../assets/img3.jpg';
import image4 from '../../assets/img4.jpg';
import image5 from '../../assets/img5.jpg';
import image6 from '../../assets/img6.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const CategoriesSlider = () => {
    return (
      <div className='my-12 container'>
        <h2 className="text-3xl text-center font-bold mb-5 text-orange-600">Blogs</h2>
        
       <Swiper
       effect={ 'coverflow' }
       grabCursor={ true }
       centeredSlides={ true }
       loop={ true }
       slidesPerView={ 'auto' }
       coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }
       }
       pagination={{ el: '.swiper-pagination', clickable: true}}
       navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
       }}
       modules={[EffectCoverflow, Pagination, Navigation]}
       className='swiper_container'
       >
        {/* <div className="grid grid-cols-6 gap-6"> */}
        
          <SwiperSlide>
          <div className="slide slide1" >
            <img src={image1} alt="" />
            </div> 
            </SwiperSlide>

            <SwiperSlide>
          <div className="slide slide2">
          <img src={image2} alt="" />
            </div>   
            </SwiperSlide>

            <SwiperSlide>
          <div className="slide slide3">
          <img src={image3} alt="" />
            </div>  
            </SwiperSlide> 

            <SwiperSlide>
          <div className="slide slide4">
          <img src={image4} alt="" />
            </div>    
            </SwiperSlide>

            <SwiperSlide>
          <div className="slide slide5">
          <img src={image5} alt="" />
            </div> 
            </SwiperSlide>

            <SwiperSlide>
          <div className="slide slide6">
          <img src={image6} alt="" />
            </div>    
            </SwiperSlide>
        
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon className="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon className="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {/* </div> */}
       </Swiper>
       
      </div>
    );
};

export default CategoriesSlider;