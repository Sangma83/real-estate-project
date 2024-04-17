import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(src/assets/ban1.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
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