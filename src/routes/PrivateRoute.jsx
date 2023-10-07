import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const { user } = useAuth()

    const location = useLocation()

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;