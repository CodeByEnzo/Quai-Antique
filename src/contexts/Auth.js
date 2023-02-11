import React, { useState } from "react";

const Auth = React.createContext({
    isAuthenticated: false,
    setLogin: value => { }
});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const setLogin = (value) => {
        setIsAuthenticated(value);
    };
    return (
        <Auth.Provider value={{ isAuthenticated, setLogin }}>
            {children}
        </Auth.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(Auth);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};

export default Auth;