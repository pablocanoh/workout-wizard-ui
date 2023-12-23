import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

export const AuthProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    let isAuthorized = false;

    if (token) {
        try {
            // Decode the token to get its payload
            const decodedToken = jwtDecode(token);
            const current_time = Date.now() / 1000; // in seconds
            if (decodedToken.exp > current_time) {
                // Token is not expired
                isAuthorized = true;
            }
        } catch (error) {
            console.error("Token validation error:", error);
            isAuthorized = false;
        }
    }

    if (!isAuthorized) {
        // Token is not present, invalid or expired
        return <Navigate to="/auth" replace />;
    }

    return children;
};
