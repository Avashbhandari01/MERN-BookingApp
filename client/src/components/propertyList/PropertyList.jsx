import "./propertyList.css";
import useFetch from "../../hooks/useFetch";
import Skeleton from "../skeleton/Skeleton";
import Slider from "react-slick";

function PropertyList() {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/propertyType"
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="propertyList">
      {loading ? (
        "Loading please wait..."
      ) : (
        <>
          <Slider {...settings}>
            {data.map((item) => (
              <div className="propertyListItem" key={item._id}>
                <img
                  src={item.image}
                  alt="Property Images"
                  className="propertyListImage"
                />
                <div className="propertyListTitles">
                  <h1>{item.name}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
}

export default PropertyList;
