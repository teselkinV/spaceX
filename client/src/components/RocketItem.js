import React from "react";
import { Link } from "react-router-dom";

function RocketItem({
  rocket: { rocket_id, rocket_name, rocket_type, active, cost_per_launch },
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            <span className="text-secondary">Rocket: </span>
            <span>{rocket_name}</span>
          </h4>
          <h4>
            <span className="text-muted">Active: </span>
            <span className={active ? "text-success" : "text-danger"}>
              {active ? "Yes" : "No"}
            </span>
          </h4>
          <h4>
            <span className="text-muted">Cost per launch: </span>$
            {cost_per_launch}
          </h4>
        </div>
        <div className="col-md-3">
          <Link to={`/rocket/${rocket_id}`} className="btn">
            Rocket Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RocketItem;
