import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import Firebase from "firebase";
import * as ROUTES from "../constants/routes";

type IsUserRedirectTypeProps = {
  user: Firebase.User | undefined;
  path: string;
  loggedInPath: string;
  children: ReactNode;
};

export function IsUserRedirect({
  user,
  path,
  loggedInPath,
  children,
  ...rest
}: IsUserRedirectTypeProps) {
  return (
    <Route
      {...rest}
      exact
      path={path}
      render={() => {
        if (!user) {
          return children;
        } else {
          return <Redirect exact to={{ pathname: loggedInPath }} />;
        }
      }}
    />
  );
}

type ProtectedRoutePropsType = {
  user: Firebase.User | undefined;
  path: string;
  children: ReactNode;
};

export function ProtectedRoute({
  user,
  path,
  children,
  ...rest
}: ProtectedRoutePropsType) {
  return (
    <Route
      {...rest}
      exact
      path={path}
      render={({ location }) => {
        if (user) {
          return children;
        } else {
          return (
            <Redirect
              exact
              to={{ pathname: ROUTES.SIGN_IN, state: { from: location } }}
            />
          );
        }
      }}
    />
  );
}
