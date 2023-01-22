import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
const App = () => {
  return (
    <Router>    
      <MainNavigation />     
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
