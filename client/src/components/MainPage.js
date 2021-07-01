import React from "react";
import { Link } from "react-router-dom";
import launch from "../launch.png";

function MainPage() {
  return (
    <div className="main-page">
      {/* <img className="launch-img" src={launch} alt="spacex" /> */}
      <div className="main-links row">
        <h1 className="col-md-6 text-center my-auto">
          <Link to="rockets" className="text-link">
            Rockets
          </Link>
        </h1>
        <h1 className="col-md-6 text-center my-auto">
          <Link to="/launches" className="text-link ">
            Launches
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default MainPage;
