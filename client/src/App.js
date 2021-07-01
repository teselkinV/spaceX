import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import Rockets from "./components/Rockets";
import Rocket from "./components/Rocket";
import MainPage from "./components/MainPage";
import logo from "./logo_black.png";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Link to="/" className=" a-logo text-center">
          <img src={logo} alt="spasex" className="logo" />
        </Link>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/launches" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
        <Route exact path="/rockets" component={Rockets} />
        <Route exact path="/rocket/:rocket_id" component={Rocket} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
