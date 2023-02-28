import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ redirectPath = '/login' }) => {
    const location = useLocation()
    const loggedIn = useSelector(state => state.auth.loggedIn)


    if (loggedIn) {
       return <Outlet />
    } else {
        return <Navigate to={redirectPath} state={{ from: location }} replace />;
    }


};

export default ProtectedRoute