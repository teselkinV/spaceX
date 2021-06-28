import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissinKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LauncheQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return (
    <div className="container root">
      <h2 className="display-4 my-3 lauches-title">Launches</h2>
      <MissinKey />
      <div>
        {data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
    </div>
  );
}

export default Launches;
