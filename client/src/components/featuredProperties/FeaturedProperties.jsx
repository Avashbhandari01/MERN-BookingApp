import "./featuredProperties.css";

function FeaturedProperties() {
  return (
    <div className="featuredProperties">
      <div className="featuredPropertiesItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="featuredPropertiesImg"
        />
        <span className="featuredPropertiesName">Aparthotel Stare Miasto</span>
        <span className="featuredPropertiesCity">Madrid</span>
        <span className="featuredPropertiesPrice">Starting from $120</span>
        <div className="featuredPropertiesRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredPropertiesItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="featuredPropertiesImg"
        />
        <span className="featuredPropertiesName">Comfort Suites Airport</span>
        <span className="featuredPropertiesCity">Austin</span>
        <span className="featuredPropertiesPrice">Starting from $140</span>
        <div className="featuredPropertiesRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredPropertiesItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="featuredPropertiesImg"
        />
        <span className="featuredPropertiesName">Four Seasons Hotel</span>
        <span className="featuredPropertiesCity">Lisbon</span>
        <span className="featuredPropertiesPrice">Starting from $99</span>
        <div className="featuredPropertiesRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredPropertiesItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="featuredPropertiesImg"
        />
        <span className="featuredPropertiesName">Hilton Garden Inn</span>
        <span className="featuredPropertiesCity">Berlin</span>
        <span className="featuredPropertiesPrice">Starting from $105</span>
        <div className="featuredPropertiesRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
