import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const ROCKET_QUERY = gql`
  query RocketQuery($rocket_id: String!) {
    rocket(rocket_id: $rocket_id) {
      id
      rocket_id
      rocket_name
      rocket_type
      description
      height {
        meters
        feet
      }
      diameter {
        meters
        feet
      }
      mass {
        kg
        lb
      }
      first_stage {
        engines
        fuel_amount_tons
        burn_time_sec
        reusable
      }
      second_stage {
        engines
        fuel_amount_tons
        burn_time_sec
        thrust {
          kN
          lbf
        }
      }
      engines {
        number
        type
        version
        propellant_1
        propellant_2
      }
      landing_legs {
        number
        material
      }
    }
  }
`;

function Rocket(props) {
  let { rocket_id } = props.match.params;
  //   rocket_id = parseInt(rocket_id);

  const { loading, error, data } = useQuery(ROCKET_QUERY, {
    variables: { rocket_id },
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);
  //   console.log(data);

  const {
    rocket_name,
    rocket_type,
    description,
    height,
    diameter,
    mass,
    first_stage,
    second_stage,
    engines,
    landing_legs,
  } = data.rocket;
  return (
    <div className="container root">
      <Carousel controls={false} indicators={true}>
        <Carousel.Item interval={10000000}>
          <div className="row">
            <div className="col-md-6">
              <h3 className="my-3 text-uppercase rocket-name">{rocket_name}</h3>
              <p className="my-4 description-rocket">{description}</p>
              <h2 className="my-4 text-uppercase">Rocket Details</h2>
              <ul className="list px-0">
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">Height</span>
                  {height.meters}m
                  <span className="text-muted"> / {height.feet}ft</span>
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">Diameter</span>
                  {diameter.meters}m
                  <span className="text-muted"> / {diameter.feet}ft</span>
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">Mass</span>
                  {mass.kg} kg
                  <span className="text-muted">/ {mass.lb}lb</span>
                </li>
              </ul>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={10000000}>
          <div>
            <h3 className="my-3 text-uppercase rocket-name">{rocket_name}</h3>
            <h2 className="my-4 text-uppercase">First stage</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul className="list px-0">
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">Engines</span>{" "}
                  {first_stage.engines}
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">
                    Fuel amount
                  </span>{" "}
                  {first_stage.fuel_amount_tons} tons
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">
                    Burn time
                  </span>{" "}
                  {first_stage.burn_time_sec} sec
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">Reusable</span>{" "}
                  <span
                    className={
                      first_stage.reusable ? "text-success" : "text-danger"
                    }
                  >
                    {first_stage.reusable ? "Yes" : "No"}
                  </span>
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">
                    Landing legs
                  </span>{" "}
                  {landing_legs.number}
                </li>
                {landing_legs.material ? (
                  <li className="border-bottom my-2 py-3 row">
                    <span className="text-uppercase col-6 mr-auto">
                      Landing legs material
                    </span>{" "}
                    <span className="text-capitalize">
                      {landing_legs.material}
                    </span>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={10000000}>
          <div>
            <h3 className="my-3 text-uppercase rocket-name">{rocket_name}</h3>
            <h2 className="my-4 text-uppercase">Engine Details</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul className="list px-0">
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">
                    Number og engines
                  </span>{" "}
                  {engines.number}
                </li>
                <li className="border-bottom my-2 py-3 text-capitalize row">
                  <span className="text-uppercase col-6 mr-auto">Type</span>{" "}
                  {engines.type}
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">Version</span>{" "}
                  {engines.version}
                </li>
                <li className="border-bottom my-2 py-3 text-capitalize row">
                  <span className="text-uppercase col-6 mr-auto">
                    First tank for propellant
                  </span>{" "}
                  {engines.propellant_1}
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">
                    Secons tank for propellant
                  </span>{" "}
                  {engines.propellant_2}
                </li>
              </ul>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={100000000}>
          <div>
            <h3 className="my-3 text-uppercase rocket-name">{rocket_name}</h3>
            <h2 className="my-4 text-uppercase">Second stage</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul className="list px-0">
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">
                    Number of engines
                  </span>{" "}
                  {second_stage.engines}
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">
                    Fuel amount
                  </span>
                  {second_stage.fuel_amount_tons} tons
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">
                    Burn time
                  </span>
                  {second_stage.burn_time_sec} sec
                </li>
                <li className="border-bottom my-2 py-3 row">
                  <span className="text-uppercase col-6 mr-auto">Thrust</span>
                  {second_stage.thrust.kN}kN{" "}
                  <span className="text-muted">
                    / {second_stage.thrust.lbf}lbf
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <Link to="/rockets" className="btn btn-secondary my-3">
        Back
      </Link>
    </div>
  );
}

export default Rocket;
