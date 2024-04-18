import { useParams } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const FeatureDetail = ({ features }) => { 
    const [feature, setFeature] = useState({});
    const [featureList, setFeatureList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('/residential.json')
        .then((res) => res.json())
        .then(data => setFeatureList(data))
    }, [])
    
    useEffect(() => {
        if (featureList.length > 0) {
            const list = featureList.find(feature => feature.featureId === id);
            setFeature(list);
        }
    }, [id, featureList])
    

    return (
        <div>
            <Helmet>
                <title>Maple Ridge || Details</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure><img src={feature?.image} alt="Property"/></figure> 
                <div className="card-body">
                    <h2 className="card-title">{feature?.estate_title}</h2>
                    <div className="badge badge-secondary">{feature?.status}</div>
                    <p>{feature?.location}, {feature?.area}</p>
                    <div className="card-actions justify-end">
                        <p className="font-bold text-orange-400">{feature?.price}</p>
                        <div className="badge badge-outline">{feature?.segment_name}</div>
                    </div>
                    <p>{feature?.description}</p>
                    <p>{feature?.facilities}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FeatureDetail;
