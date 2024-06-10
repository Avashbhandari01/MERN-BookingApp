import "./featured.css";
import useFetch from "../../hooks/useFetch";
import Skeleton from "../skeleton/Skeleton";

function Featured() {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=Berlin,Madrid,London"
  );

  return (
    <div className="featured">
      {loading ? (
        <Skeleton type="feature" />
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/977237.jpg?k=6d894f6f1bc6d83e5206ee19d4e593b008640ec596ed3803071cc03aff856b8b&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              {/* <h2>{data[0]} properties</h2> */}
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/971353.jpg?k=a5b47d2c38469086427837dfe64ab2e6f57ba52f0504359ef4cc02dc4b9b0737&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              {/* <h2>{data[1]} properties</h2> */}
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/977262.jpg?k=2b852648c76ccaff8be05333057712eda873343dfaa79cd23e55534a1a55aecc&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              {/* <h2>{data[2]} properties</h2> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
