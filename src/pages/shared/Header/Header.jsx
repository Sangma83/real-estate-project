
import { FaSearch } from "react-icons/fa";
import banner from '../../../assets/ban1.jpg';
import banner2 from '../../../assets/bann2.jpg';
import banner3 from '../../../assets/bann3.jpg';

const Header = () => {
    return (
        <div className="hero min-h-screen relative overflow-hidden">
            <div className="slider-container">
                <input type="radio" name="slider" className="hidden" id="slide1" defaultChecked />
                <input type="radio" name="slider" className="hidden" id="slide2" />
                <input type="radio" name="slider" className="hidden" id="slide3" />
                <div className="slides relative">
                    <div id="overflow" className="overflow-control">
                        <div className="slide">
                            <img src={banner} alt="Banner 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="slide">
                            <img src={banner2} alt="Banner 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="slide">
                            <img src={banner3} alt="Banner 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="controls absolute top-1/2 left-0 right-0 px-10">
                    <label htmlFor="slide1" className="control-dot"></label>
                    <label htmlFor="slide2" className="control-dot"></label>
                    <label htmlFor="slide3" className="control-dot"></label>
                </div>
            </div>
            <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
            <div className="hero-content text-center text-neutral-content relative z-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Your dream home is our top priority</h1>
                    <p className="mb-5 text-white">And In Order To Make A Business, Brand Advertising And Marketing Plays
                        An Important Role. Similarly, In Making Cultivation Business A Brand,
                        Good Slogans Are Necessary.</p>
                    <button className="btn btn-error text-white">Discover More +</button>
                </div>

                {/**rating form */}

                <div className="stats shadow-xl bg-opacity-50 mt-96">

                    <div className="stat place-items-center">
                        <div className="stat-title text-black font-bold">Location</div>
                        <div className="stat-desc text-neutral-800 ">Select Your City</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-black font-bold">Property Type</div>
                        <div className="stat-desc text-orange-700">Choose Property Type</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-black font-bold">Price Range</div>
                        <div className="stat-desc text-neutral-800">Choose Price Range</div>
                    </div>

                    <div className="stat place-items-center text-orange-500">
                        <FaSearch />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
