//	components/AnonRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/Auth";

function AnonRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    // <Route
    //   {...rest}
    //   render={props =>
    //     !isLoggedIn ? <Component {...props} /> : <Redirect to="/private" />
    //   }
    // />
    <Route
      {...rest}
      render={function(props) {
        if (isLoggedIn) return <Redirect to="/private" />;
        else if (!isLoggedIn) return <Component {...props} />;
      }}
    />
  );
}

export default withAuth(AnonRoute);
