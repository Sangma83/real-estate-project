import { ImBin } from "react-icons/im";
import { TiPencil } from "react-icons/ti";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const ContactRoute = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Maple Ridge || Contact Us</title>
      </Helmet>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl">Contact Us and Find Your Home!</h1>
              <p className="py-6">Our broker centers are located throughout the entire country ensuring you get our assistance in every state. Our professional real estate team made sure you get the highest level of help with your property quests.</p>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl">Need Some Help?</h1>
              <div className="flex flex-col lg:flex-row gap-6 mt-16">
                <div className="flex items-center gap-3">
                  <ImBin className="text-7xl text-orange-950" />
                  <div>
                    <p className="mt-4 text-orange-900">Cleaning Service</p>
                    <p className="mt-4">It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TiPencil className="text-7xl text-orange-950" />
                  <div>
                    <p className="mt-4 text-orange-900">Interior Design</p>
                    <p className="mt-4">It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea placeholder="Write here..." className="textarea textarea-bordered textarea-lg w-full max-w-xs" required></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#bc986b]">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactRoute;
