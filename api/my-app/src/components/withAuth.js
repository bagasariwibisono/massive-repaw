import React from "react";
import { Navigate } from 'react-router-dom';

function verify() {
  const token = localStorage.getItem('token')

  if (!token) return false

  return true
}

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const verified = verify();

    if (!verified) {
      return <Navigate to="/login" />
    }

    return <Component {...props} verified={verified} />;
  };
}
