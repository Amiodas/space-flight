import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Home.css";
import Flights from "../../components/Flights/Flights";
import FlightContext from "../../providers/FlightContext";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalFlightCount = useLoaderData();

  const [inputValue, setInputValue] = useState("");

  const totalFlights = totalFlightCount.length;
  const itemsPerPage = 9;
  const totalFlightPages = Math.ceil(totalFlights / itemsPerPage);
  const pageNumbers = [...Array(totalFlightPages).keys()];
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches?page=${currentPage}&limit=${itemsPerPage}`
      );

      const data = await response.json();
      setFlights(data);
      setLoading(false);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  const handleClick = (number) => {
    setCurrentPage(number);
    console.log(number);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Input Value:", inputValue);
  };

  return (
    <div>
      <div className="mt-5 mb-10 md:flex  justify-between items-end">
        <div>
          <form onSubmit={handleSubmit} className="flex items-end">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs rounded-none search"
            />
            <button
              type="submit"
              className="btn btn-primary rounded-none border-0 search-btn"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div className="">
          <div className="form-control md-2 md:mb-3">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-sm"
              />
              <span className="label-text pl-3">Show upcoming only</span>
            </label>
          </div>
          {/* Below Launch status and date */}
          <div className="md:flex md:gap-3">
            <div className="mb-3">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  By Launch Status
                </option>
                <option>Success</option>
                <option>Failed</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  By Launch Date
                </option>
                <option>Last Week</option>
                <option>Last Month</option>
                <option>Last Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Flights */}
      <div>
        <FlightContext.Provider value={flights}>
          {loading ? (
            <div className="flex flex-col items-center py-10">
              <span className="loading loading-bars loading-lg"></span>
              <p className="mt-2">
                Data is loading, Please wait for some time.
              </p>
            </div>
          ) : (
            <Flights />
          )}
        </FlightContext.Provider>
      </div>
      {/* pagination   */}
      <div className="flex justify-center">
        <div className="pagination join">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className="join-item btn text-center mx-auto"
              onClick={() => handleClick(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
