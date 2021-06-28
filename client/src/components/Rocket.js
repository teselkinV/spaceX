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
  } = data.rocket;
  return (
    <div>
      <Carousel controls={false} indicators={true}>
        <Carousel.Item interval={10000000}>
          <div className="container root">
            <div>
              <h3 className="my-3 text-uppercase rocket-name">{rocket_name}</h3>
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
                  <li className="border-bottom my-2 py-3">
                    Diameter {diameter.meters} / {diameter.feet}
                  </li>
                  <li className="border-bottom my-2 py-3">
                    Mass {mass.kg} / {mass.lb}
                  </li>
                </ul>

                <Link to="/rockets" className="btn btn-secondary my-3">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={10000000}>
          <h3>Second slide</h3>
        </Carousel.Item>
        <Carousel.Item interval={10000000}>
          <h1>Third</h1>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Rocket;
