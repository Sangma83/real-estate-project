import { ImBin } from "react-icons/im";
import { TiPencil } from "react-icons/ti";


const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-20">
  <div className="hero-content flex-col lg:flex-row">
   <div className="lg:flex-col">
   <div className="text-center lg:text-left">
      <h1 className="text-4xl">Contact Us and Find Your Home!</h1>
      <p className="py-6">Our broker centers are located throughout the entire country ensuring you get our assistance in every state. Our professional real estate team made sure you get the highest level of help with your property quests.</p>
    </div>
    <div className="text-center lg:text-left">
      <h1 className="text-4xl">Need Some Help?</h1>
      <div className="flex gap-6 mt-16">
      <ImBin className="text-7xl text-orange-950" /> <div className=" items-center gap-3"> 
      <p className="mt-4 text-orange-900">Cleaning Service</p>
        <p className="mt-4">It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
        </div>
        <TiPencil className="text-7xl text-orange-950" /><div className="items-center gap-3"> 
        <p className="mt-4 text-orange-900">Interior Design</p>
        <p className="mt-4">It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
        </div>
      </div>
    </div>
   </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
         
        </div>
        <div>
        <label className="label">
            <span className="label-text">Message</span>
          </label>
        <textarea placeholder="write here.." className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#bc986b]">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Contact;