import React from "react";
import { useAuth } from "../contexts/Auth";
import { Navigate } from "react-router-dom";

function AuthenticatedRoute({ children }) {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to="/Login" />;
};

export default AuthenticatedRoute;