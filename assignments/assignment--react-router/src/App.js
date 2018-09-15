import React, { Component } from "react";
import PortfolioFixed from "./components/PortfolioFixed.js";
import { Route, Switch } from "react-router-dom";
import CvView from "./components/CvView";
import HomeView from "./components/HomeView";
import ProjectsView from "./components/ProjectsView";
import Nav from "./components/Nav";
// b.1 Import the Switch, Route from react-router-dom

// b.2 Import the View Component Files

// b.3 Import the Nav file

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <Nav />
        {/* Configure Nav File */}
        <PortfolioFixed />

        {/* Configure Switch + Route to render View Component files */}
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/cv" component={CvView} />
          <Route exact path="/projects" component={ProjectsView} />
        </Switch>
      </div>
    );
  }
}

export default App;
