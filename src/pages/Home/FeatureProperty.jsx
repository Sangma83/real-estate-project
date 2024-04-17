import { Link } from "react-router-dom";


const FeatureProperty = ({features}) => {
    const { id, image,estate_title, status,location, area, price, description, segment_name } = features;
    return (
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {estate_title}
      <div className="badge badge-secondary">{status}</div>
    </h2>
        <p>{location},{area}</p>
        <div className="card-actions justify-end">
        <p className="font-bold text-orange-400">{price}</p>
      <div className="badge badge-outline">{segment_name}</div> 
    </div>
    
    <p>{description}</p>
    
    <div>
       <Link to={`/features/${id}`}> <button className="btn btn-error text-white">View Property</button></Link>
    </div>
  </div>
</div>

    );
};

export default FeatureProperty;