import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Favorites from "./components/Favorite";
import MovieDetails from "./components/movieDetails";
import Search from "./components/Search";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Search} />
          <Route
            exact
            path="/movieApp"
            component={Search}
          />

          <Route path="/favorite" component={Favorites} />
          <Route path="/movie/:movieID" component={MovieDetails} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
