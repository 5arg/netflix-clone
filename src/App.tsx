import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Landing, Browse, SignIn, SignUp } from "./pages";
import { FirebaseProvider } from "./context/Firebase";
import "normalize.css";

export default function App() {
  return (
    <FirebaseProvider>
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
    </FirebaseProvider>
  );
}
