import React from "react";
import { useSelector } from "react-redux";
import { Navigate,Route } from "react-router-dom";
import InsideLayout from "../layouts/InsideLayout";

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth } = useSelector(state => state.user);
  return (
      <Route
          {...rest}
          render={(props) => (
              isAuth
                  ? <InsideLayout><Component {...props} /></InsideLayout>
                  : <Navigate to={{ pathname: '/', state: { from: props.location } }} />
          )}
      />
  )
}


export default PrivateRoute;
