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
    <div>
      <Carousel controls={false} indicators={true}>
        <Carousel.Item interval={10000000}>
          <div className="container root">
            <div>
              <h3 className="my-3 text-uppercase rocket-name">{rocket_name}</h3>
              <p className="my-4 ">{description}</p>
              <h2 className="my-4 text-uppercase">Rocket Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul className="list px-0">
                  <li className="border-bottom my-2 py-3">
                    Height {height.meters} / {height.feet}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Diameter {diameter.meters} / {diameter.feet}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Mass {mass.kg} / {mass.lb}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={10000000}>
          <div className="container root">
            <div>
              <h3 className="my-3 text-uppercase rocket-name">{rocket_name}</h3>

              <h2 className="my-4 text-uppercase">First stage</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul className="list px-0">
                  <li className="border-bottom my-2 py-3">
                    Engines {first_stage.engines}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Fuel amount {first_stage.fuel_amount_tons}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Burn time {first_stage.burn_time_sec}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Reusable{" "}
                    <span
                      className={
                        first_stage.reusable ? "text-success" : "text-danger"
                      }
                    >
                      {first_stage.reusable ? "Yes" : "No"}
                    </span>
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Landing legs {landing_legs.number}
                  </li>
                  {landing_legs.material ? (
                    <li className="border-bottom my-2 py-3">
                      Landing legs material {landing_legs.material}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={10000000}>
          <div className="container root">
            <div>
              <h3 className="my-3 text-uppercase rocket-name">{rocket_name}</h3>

              <h2 className="my-4 text-uppercase">Second stage</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul className="list px-0">
                  <li className="border-bottom my-2 py-3">
                    Number of engines {second_stage.engines}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Fuel amount {second_stage.fuel_amount_tons}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Burn time {second_stage.burn_time_sec}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Thrust {second_stage.thrust.kN}kN /{" "}
                    {second_stage.thrust.lbf}lbf
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={10000000}>
          <div className="container root">
            <div>
              <h3 className="my-3 text-uppercase rocket-name">{rocket_name}</h3>
              <h2 className="my-4 text-uppercase">Engine Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul className="list px-0">
                  <li className="border-bottom my-2 py-3">
                    Number of engines {engines.number}
                  </li>
                  <li className="border-bottom my-2 py-3 text-capitalize">
                    Type {engines.type}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Version {engines.version}
                  </li>
                  <li className="border-bottom my-2 py-3 text-capitalize">
                    First tank for propellant {engines.propellant_1}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Second tank for propellant {engines.propellant_2}
                  </li>
                </ul>
              </div>
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
