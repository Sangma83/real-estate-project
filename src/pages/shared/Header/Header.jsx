import { FaSearch, FaMapMarkerAlt, FaAngleDown } from "react-icons/fa";
import banner from '../../../assets/ban1.jpg';
import banner2 from '../../../assets/bann2.jpg';
import banner3 from '../../../assets/bann3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaDollarSign } from "react-icons/fa6";

const Header = () => {
    const sliderStyle = {
        width: "100%",
        padding: "50px 0"
    };

    const slideStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden"
    };

    const slideImageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    };

    // const heroOverlayStyle = {
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: "rgba(0, 0, 0, 0.5)"
    // };

    const heroContentStyle = {
        position: "relative",
        zIndex: 10
    };

    const statsStyle = {
        position: "relative",
        zIndex: 10
    };

    const statStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    };



    return (
        <div className="hero min-h-screen relative overflow-hidden">
            <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={
                {delay: 2000}
            } 
            loop={true}
            navigation={true}
            pagination={true} 
            style={sliderStyle}>
                <SwiperSlide style={slideStyle}><img src={banner} alt="" style={slideImageStyle} /></SwiperSlide>
                <SwiperSlide style={slideStyle}><img src={banner2} alt="" style={slideImageStyle} /></SwiperSlide>
                <SwiperSlide style={slideStyle}><img src={banner3} alt="" style={slideImageStyle} /></SwiperSlide>
            </Swiper>

            {/* <div className="hero-overlay bg-opacity-50" style={heroOverlayStyle}></div> */}
            <div className="hero-content text-center text-neutral-content" style={heroContentStyle}>
                <div className="max-w-md bg-slate-500 p-4 bg-opacity-50 rounded-lg">
                    <h1 className="mb-5 text-5xl font-bold text-white  ">Your dream home is our top priority</h1>
                    <p className="mb-5 text-white">And In Order To Make A Business, Brand Advertising And Marketing Plays
                        An Important Role. Similarly, In Making Cultivation Business A Brand,
                        Good Slogans Are Necessary.</p>
                    <button className="btn bg-[#bc986b] text-white">Discover More +</button>
                </div>

                <div className="stats shadow-xl bg-opacity-50 mt-96 z-10" style={statsStyle}>
                <div className="stat place-items-center" style={statStyle}>
                    <div className="stat-title flex gap-4  text-black font-bold"> 
                    Location<FaMapMarkerAlt />
                    </div>
                    <div className="stat-desc text-neutral-800 mr-4 text-orange-700">Select Your City</div>
                </div>
                <div className="stat place-items-center" style={statStyle}>
                    <div className="stat-title flex gap-4 text-black font-bold">
                         Price Range<FaDollarSign />
                    </div>
                    <div className="stat-desc text-neutral-800 mr-4 text-orange-700">Choose Price Range</div>
                </div>
                <div className="stat place-items-center" style={statStyle}>
                    <div className="stat-title flex gap-4 text-black font-bold">
                         Property Type<FaAngleDown />
                    </div>
                    <div className="stat-desc text-orange-700 mr-4">Choose Property Type</div>
                </div>
                <div className="stat place-items-center text-orange-500" style={statStyle}>
                    <FaSearch />
                </div>
            </div>

            </div>
        </div>
    );
};

export default Header;
