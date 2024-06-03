import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

function FeaturedProperties() {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  );

  return (
    <div className="featuredProperties">
      {loading ? (
        "Loading please wait..."
      ) : (
        <>
          {data.map((item) => (
            <div className="featuredPropertiesItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="featuredPropertiesImg"
              />
              <span className="featuredPropertiesName">{item.name}</span>
              <span className="featuredPropertiesCity">{item.city}</span>
              <span className="featuredPropertiesPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="featuredPropertiesRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperties;
