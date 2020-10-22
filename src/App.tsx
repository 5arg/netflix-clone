import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Landing, Browse, SignIn, SignUp } from "./pages";
import "normalize.css";
import { ProtectedRoute } from "./helpers/routes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route loggedInPath={ROUTES.BROWSE} exact path={ROUTES.HOME}>
          <Landing />
        </Route>
        <Route loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <ProtectedRoute path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
