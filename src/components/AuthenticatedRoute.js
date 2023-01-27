import React, { useContext } from "react";
import Auth from "../contexts/Auth";
import { Navigate } from "react-router-dom";

function AuthenticatedRoute({ children}) {
    const { isAuthenticated } = useContext(Auth);

    return isAuthenticated ? children : <Navigate to ="/Login"/>;
};

export default AuthenticatedRoute