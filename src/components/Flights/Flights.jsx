import React, { useContext } from "react";
import moment from "moment";
import FlightContext from "../../providers/FlightContext";

const Flights = () => {
  const flights = useContext(FlightContext);
  return (
    <div className="md:py-12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {flights?.map((flight, index) => (
          <div key={index} className="card p-8 border rounded">
            <div className="text-center mx-auto">
              <div className="text-center">
                <img
                  src={(flight.links.mission_patch_small !== null) ? flight.links.mission_patch_small : `/empty.jpg`}
                  className="w-36 h-36 mx-auto"
                  alt=""
                />
              </div>
              <p className="mt-10 mb-2">
                <span className="">Launch Date: </span>{" "}
                <span className="text-gray-900">
                  {moment(flight.launch_date_utc).format("DD MMM, YYYY")}
                </span>
              </p>
              <h3 className="text-xl mb-1 font-semibold text-gray-900">
                {flight.mission_name}
              </h3>
              <h4 className="text-sm mb-6">{flight.rocket.rocket_name}</h4>
              <h3 className="mb-1">Launch status:</h3>
              <div>
                {flight.launch_success === false ? (
                  <span className="badge badge-primary rounded border-0 text-xs bg-red-700">
                    Failed
                  </span>
                ) : (
                  <span className="badge badge-primary bg-green-700 rounded text-xs border-0">
                    Success
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
