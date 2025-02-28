import React, { createContext, useState, useContext } from 'react';
import { loginUser, otpVerify } from '../Services/Api';

// Create the Auth Context
const AuthContext = createContext();

// Create a custom hook to use the Auth Context
export const useAuth = () => {
    return useContext(AuthContext);
};

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (loginData) => {
        setLoading(true);
        setError(null);
        try {
            // Assume loginUser is your API call
            setLoading(true);
            const response = await loginUser(loginData);
            setIsLoggedIn(true);
            setLoading(false);
            setUser(response.data.user); // Adjust based on your response
           // sessionStorage.setItem('userToken', response.data.token);
          //  return response.data;
        } catch (err) {
            setLoading(false);
            setError(err);
            setIsLoggedIn(false);
            throw err;
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userObj');
        sessionStorage.setItem('isUserLoggedIn', 'false');
        document.location.href = 'hotel';
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, loading, error, login, logout, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider