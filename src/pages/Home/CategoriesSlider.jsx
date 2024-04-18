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
      <div className='my-12  container'>
        <h2 className="text-3xl text-center font-bold mb-5 text-orange-600">Blogs</h2>
        <div className="grid grid-cols-6 gap-6">
          
          <div className="slide slide1" >
            <img src={image1} alt="" />
            
            </div>  
          <div className="slide slide2">
          <img src={image2} alt="" />
            
            </div>  
          <div className="slide slide3">
          <img src={image3} alt="" />
            
            </div>  
          <div className="slide slide4">
          <img src={image4} alt="" />
           
            </div>  
          <div className="slide slide5">
          <img src={image5} alt="" />
          
            </div>  
          <div className="slide slide6">
          <img src={image6} alt="" />
            
            </div>  
        </div>
      </div>
    );
};

export default CategoriesSlider;