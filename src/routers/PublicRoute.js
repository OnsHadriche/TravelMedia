import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import OutsideLayout from "../layouts/OutsideLayout";

function PublicRoute({ component: Component, ...rest }) {
  const { isAuth } = useSelector(state => state.user);
  return (
      <Route
          {...rest}
          render={(props) => (
             isAuth
              ? <Navigate to={{ pathname: '/', state: { from: props.location } }} />
              : <OutsideLayout><Component {...props} /></OutsideLayout>
          )}
      />
  )
}

export default PublicRoute;