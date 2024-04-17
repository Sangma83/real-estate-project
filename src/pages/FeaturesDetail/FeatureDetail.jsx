import { useParams } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";


const FeatureDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">
  <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default FeatureDetail;