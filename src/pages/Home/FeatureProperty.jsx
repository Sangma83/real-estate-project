import { Link } from "react-router-dom";


const FeatureProperty = ({features}) => {
    const { id, image,estate_title, status,location, area, price, description, segment_name, facilities } = features;
    return (
     
        
            
            <div className="card w-96 bg-base-100 shadow-xl">
            
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {estate_title}
      <div className="badge badge-secondary">{status}</div>
    </h2>
        <p className="font-bold">{location},{area}</p>
        <div className="card-actions justify-end">
        <p className="font-bold">{price}</p>
      <div className="badge badge-outline bg-orange-500 text-white">{segment_name}</div> 
    </div>
    
    <p>{description}</p>
    <p className="font-bold text-orange-400">{facilities}</p>
    <div className="">
    <Link to={`/features/${id}`}> <button className="btn btn-error text-white">View Property</button></Link>
       
    </div>
  </div>
</div>

    );
};

export default FeatureProperty;