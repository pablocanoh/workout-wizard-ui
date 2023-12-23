import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const isAuthorized = localStorage.getItem('trainingData');

    if (!isAuthorized) {
        return <Navigate to="/" />;
    }

    return children;
};
