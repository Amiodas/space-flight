import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Home.css"

const Home = () => {
  return (
    <div className="mt-5 mb-10 flex justify-between items-end">
      <div className="flex items-end">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full max-w-xs rounded-none search"
        />
        <button className="btn btn-primary rounded-none border-0 search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="">
        <div className="form-control mb-3">
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
        <div className="flex gap-3">
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                By Launch Status
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                By Launch Date
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
