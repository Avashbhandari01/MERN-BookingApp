import "./skeleton.css";

const PropertySkeleton = () => {
  return (
    <div className="property">
      <div className="propertyImg"></div>
      <div className="propertyInfo">
        <div className="propertyText"></div>
        <div className="propertyTextSmall"></div>
      </div>
    </div>
  );
};

const FeaturedSkeleton = () => {
  return <div className="featuredSkelImg"></div>;
};

const SliderSkeleton = () => {
  return (
    <div className="main-box">
      <div className="img-box"></div>
      <div className="text-box"></div>
      <div className="text-box-small"></div>
    </div>
  );
};

export default function Skeleton({ type }) {
  if (type === "property") return Array(4).fill(<PropertySkeleton />);
  if (type == "feature") return Array(3).fill(<FeaturedSkeleton />);
  if (type == "slider") return <SliderSkeleton />;
}
