import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const FeatureDetail = () => { 
    const features = useLoaderData();
    const { id } = useParams();
    const feature = features.find(feature => feature.id === id)
    console.log(feature, id);
    

    return (
        <div>
            <Helmet>
                <title>Maple Ridge || Details</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure className=""><img className=" shadow-2xl rounded-lg" src={feature?.image} alt="Property"/></figure> 
                <div className="card-body w-full p-14 ml-10">
                    <h2 className="card-title">{feature?.estate_title}</h2>
                    <div className="badge badge-secondary">{feature?.status}</div>
                    <p>{feature?.location}, {feature?.area}</p>
                    <div className="card-actions justify-end">
                        <p className="font-bold text-orange-400">{feature?.price}</p>
                        <div className="badge badge-outline mr-20 bg-orange-500 text-white">{feature?.segment_name}</div>
                    </div>
                    <p>{feature?.description}</p>
                    
                    <ul>
                    <p className="font-bold text-orange-500">Facilities:</p>
                        <li>{feature?.facilities[0]}</li>
                        <li>{feature?.facilities[1]}</li>
                        <li>{feature?.facilities[2]}</li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FeatureDetail;
