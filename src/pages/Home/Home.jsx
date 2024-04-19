import {  useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import CategoriesSlider from "./CategoriesSlider";
import FeatureProperty from "./FeatureProperty";
import { Helmet } from "react-helmet-async";
import GoogleMap from "../GoogleMap/GoogleMap";
import Contact from "../Contact/Contact";


const Home = () => {
    const features = useLoaderData();
    // console.log(features);
    return (
        <div>
            <Helmet>
                <title>Maple Ridge || Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Header></Header>
            <CategoriesSlider></CategoriesSlider>
            <div className="my-20">
    <div className="text-center mb-14">
<h2 className="text-4xl mb-6 text-[#bc986b] font-bold">Estates</h2>
<p>A studio apartment has a single bedroom with no living room. A one-bedroom apartment has a living or dining room separate from the bedroom. Two bedroom, three bedroom, and larger.</p>
</div>

        <div className="grid grid-cols-3 gap-12">
        {
            features.map(feature => <FeatureProperty
            key={feature.id}
            features={feature}
            ></FeatureProperty>)
        }
       
        </div>
        
    </div>
    <Contact></Contact>
    <GoogleMap></GoogleMap>
            <Footer></Footer>
        </div>
    );
};

export default Home;