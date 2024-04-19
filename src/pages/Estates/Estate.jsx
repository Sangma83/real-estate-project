import { useLoaderData } from "react-router-dom";
import FeatureProperty from "../Home/FeatureProperty";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Estate = () => {
    const features = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
       
        
                <div className="grid grid-cols-3 gap-16 my-11">
                {
                    features.map(feature => <FeatureProperty
                    key={feature.id}
                    features={feature}
                    ></FeatureProperty>)
                }
               
                </div>
                <Footer></Footer>
            </div>
    );
};

export default Estate;