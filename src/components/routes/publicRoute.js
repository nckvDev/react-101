import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isLogin = localStorage.getItem('isLogin');
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PublicRoute;
