import React from "react";
import { useQuery, gql } from "@apollo/client";
import RocketItem from "./RocketItem";

const ROCKET_QUERY = gql`
  query RocketQuery {
    rockets {
      id
      rocket_id
      rocket_name
      rocket_type
      description
      cost_per_launch
      active
      success_rate_pct
    }
  }
`;
function Rockets() {
  const { loading, error, data } = useQuery(ROCKET_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return (
    <div className="container root">
      <h2 className="display-4 my-3 lauches-title">Rockets</h2>

      <div>
        {data.rockets.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
}

export default Rockets;
