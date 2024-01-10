import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ children, ...rest }) {
  const { authToken } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authToken ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} />
        )
      }
    />
  );
}

export default ProtectedRoute;