import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useState } from "react";
import { Switch } from "react-router";
import HomeComponent from "./homeComponent";
import AddLocation from "./addLocation";
class MainComponent extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Router>
        <div className="main-router">
          <Switch>
            <Route exact path={"/"} component={HomeComponent} />
            <Route exact path={"/add"} component={AddLocation} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainComponent;
