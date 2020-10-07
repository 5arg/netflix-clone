import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import { Landing, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Landing />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
