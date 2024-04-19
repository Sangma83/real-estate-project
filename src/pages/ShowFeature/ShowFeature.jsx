

const ShowFeature = ({features}) => {
    return (
        <div>
             <div className="grid grid-cols-3 gap-12">
                {
                    features.map(feature => <FeatureProperty
                    key={feature.id}
                    features={feature}
                    ></FeatureProperty>)
                }
               
                </div>
        </div>
    );
};

export default ShowFeature;