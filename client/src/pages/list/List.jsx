import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${
      max || 9999999
    }`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {dates[0] && dates[0].startDate && dates[0].endDate
                  ? `${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`
                  : "Invalid date"}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <label>Options</label>
            <div className="listSearchOptions">
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">
                  Min price &nbsp;<small>per night</small>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMin(e.target.value)}
                  min={1}
                  className="listSearchOptionInput"
                />
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">
                  Max price &nbsp;<small>per night</small>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMax(e.target.value)}
                  min={1}
                  className="listSearchOptionInput"
                />
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="listSearchOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="listSearchOptionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="listSearchOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading please wait..."
            ) : (
              <>
                {Array.isArray(data) && data.length > 0 ? (
                  data.map((item) => <SearchItem item={item} key={item._id} />)
                ) : (
                  <div>No data available</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
