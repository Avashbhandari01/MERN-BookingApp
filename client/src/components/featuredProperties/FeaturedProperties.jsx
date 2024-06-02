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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2G3YNz-VycUMGpzuAnquw_a34y6cKhCkl29BOB-_vW1LdWakyoWjBYdCg0o69VnCHZg"
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
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1"
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
          src="https://imgs.search.brave.com/VNBwN3ScVXOThFIM0IwTuTob62qYhfdAci4xvDu-6BI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvbWF4MzAw/LzQ4NDkxMzE2NC5q/cGc_az05OWNkYzBl/ZDg1YmIxZjg1ZTZl/Y2U5ZWM3NDQ0NmIx/OWU3OTQzMmMzYzY5/ZWU3ZjE0M2IwZWNi/ZTcxMWY5ZTMzJm89/JmhwPTE"
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
