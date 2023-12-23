import React from 'react';
import { Navigate } from 'react-router-dom';

export const AuthProtectedRoute = ({ children }) => {
    const isAuthorized = localStorage.getItem('token');

    if (!isAuthorized) {
        return <Navigate to="/auth" />;
    }

    return children;
};

