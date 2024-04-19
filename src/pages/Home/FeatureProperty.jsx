import { FaHandPointRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const FeatureProperty = ({features}) => {
    const { id, image,estate_title, status,location, area, price, description, segment_name, facilities } = features;
    return (
     
        
            
            <div className="card w-96 bg-base-100 shadow-xl">
            
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {estate_title}
      <div className="btn ml-36 -mt-32 px-8 bg-[#FF7F00] text-white mask mask-parallelogram-3 skeleton">{status}</div>
    </h2>
        <p className="font-bold">{location},{area}</p>
        <div className="card-actions justify-end">
        <p className="font-bold">{price}</p>
      <div className="badge badge-outline bg-orange-500 text-white">{segment_name}</div> 
    </div>
    <p>{description}</p>
    <ul>
      <li className="flex items-center gap-2"><FaHandPointRight className="text-orange-500" />{facilities[0]}</li>
      <li className="flex items-center gap-2"><FaHandPointRight className="text-orange-500"  />{facilities[1]}</li>
      <li className="flex items-center gap-2"><FaHandPointRight className="text-orange-500" />{facilities[2]}</li>
    </ul>
    <div className="">
    <Link to={`/features/${id}`}> <button className="btn btn-error text-white">View Property</button></Link>
       
    </div>
  </div>
</div>

    );
};

export default FeatureProperty;