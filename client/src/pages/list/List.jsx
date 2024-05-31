import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  console.log(location);

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
                {date[0] && date[0].startDate && date[0].endDate
                  ? `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`
                  : "Invalid date"}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
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
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
