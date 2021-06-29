const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const axios = require("axios");

// Launch type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  }),
});

// Rocket type
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    description: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    cost_per_launch: { type: GraphQLInt },
    success_rate_pct: { type: GraphQLInt },
    height: { type: HeightType },
    diameter: { type: DiameterType },
    mass: { type: MassType },
    first_stage: { type: FirstStageType },
    second_stage: { type: SecondStageType },
    engines: { type: EnginesType },
    landing_legs: { type: LandingLegsType },
  }),
});

// Height type
const HeightType = new GraphQLObjectType({
  name: "Height",
  fields: () => ({
    meters: { type: GraphQLString },
    feet: { type: GraphQLString },
  }),
});

// Diameter type
const DiameterType = new GraphQLObjectType({
  name: "Diameter",
  fields: () => ({
    meters: { type: GraphQLString },
    feet: { type: GraphQLString },
  }),
});

// Mass type
const MassType = new GraphQLObjectType({
  name: "Mass",
  fields: () => ({
    kg: { type: GraphQLInt },
    lb: { type: GraphQLInt },
  }),
});

// FirstStage type
const FirstStageType = new GraphQLObjectType({
  name: "FirstStage",
  fields: () => ({
    engines: { type: GraphQLInt },
    fuel_amount_tons: { type: GraphQLString },
    burn_time_sec: { type: GraphQLInt },
    reusable: { type: GraphQLBoolean },
  }),
});

// SecondStage type
const SecondStageType = new GraphQLObjectType({
  name: "SecondStage",
  fields: () => ({
    engines: { type: GraphQLInt },
    fuel_amount_tons: { type: GraphQLString },
    burn_time_sec: { type: GraphQLInt },
    thrust: { type: SecondStageThrust },
  }),
});

// Second stage thrust
const SecondStageThrust = new GraphQLObjectType({
  name: "SecondStageThrust",
  fields: () => ({
    kN: { type: GraphQLInt },
    lbf: { type: GraphQLInt },
  }),
});

// Engines type
const EnginesType = new GraphQLObjectType({
  name: "Engines",
  fields: () => ({
    number: { type: GraphQLInt },
    type: { type: GraphQLString },
    version: { type: GraphQLString },
    propellant_1: { type: GraphQLString },
    propellant_2: { type: GraphQLString },
  }),
});

// Landing legs type
const LandingLegsType = new GraphQLObjectType({
  name: "LandingLegs",
  fields: () => ({
    number: { type: GraphQLInt },
    material: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "Root",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/launches")
          .then((res) => res.data);
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios(
          `https://api.spacexdata.com/v3/launches/${args.flight_number}`
        ).then((res) => res.data);
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/rockets")
          .then((res) => res.data);
      },
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios(
          `https://api.spacexdata.com/v3/rockets/${args.rocket_id}`
        ).then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
