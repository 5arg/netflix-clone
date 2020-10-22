import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import useAuthListener from "../hooks/useAuthListener";

type ProtectedRoutePropsType = {
  path: string;
  children: ReactNode;
};

export function ProtectedRoute({
  path,
  children,
  ...rest
}: ProtectedRoutePropsType) {
  const user = useAuthListener().user;
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
