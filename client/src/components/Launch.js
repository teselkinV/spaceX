import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

function Launch(props) {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);
  console.log(data);

  const {
    mission_name,
    launch_year,
    launch_date_local,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type, description },
  } = data.launch;
  return (
    <div className="container root">
      <h3 className="my-3 text-uppercase mission-name">{mission_name}</h3>
      <h2 className="my-4 text-uppercase">Launch details</h2>
      <ul className="list-group">
        <li className="list-group-item">Flight number: {flight_number}</li>
        <li className="list-group-item">Launch year: {launch_year}</li>
        <li className="list-group-item">
          Launch successful:{" "}
          <span className={launch_success ? "text-success" : "text-danger"}>
            {launch_success ? "Yes" : "No"}
          </span>
        </li>
      </ul>
      <h2 className="my-4 text-uppercase">Rocket details</h2>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>
        <li className="list-group-item">Rocket name: {rocket_name}</li>
        <li className="list-group-item">Rocket type: {rocket_type}</li>
      </ul>
      <hr />
      <Link to="/launches" className="btn btn-secondary">
        Back
      </Link>
    </div>
  );
}

export default Launch;
