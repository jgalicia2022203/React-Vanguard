/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { isAdmin, isAuthenticated, isClient } from '../validators/auth';

const ProtectedRoute = ({ children, role }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  }

  if (role === 'admin' && !isAdmin()) {
    return <Navigate to="/home" />;
  }

  if (role === 'client' && !isClient()) {
    return <Navigate to="/admin/home" />;
  }

  return children;
};

export default ProtectedRoute;
