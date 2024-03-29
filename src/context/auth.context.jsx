import React, { useState, useEffect } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  
    const removeToken = () => {
      localStorage.removeItem("authToken");
    };

  const authenticateUser = () => {
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // If the token exists in the localStorage
    if (storedToken) {
      // We use the authService to send a request to the server to verify the token
      authService
        .verify()
        .then((response) => {
          // If the server verifies that JWT token is valid  ✅
          const user = response.data;

          // Update state variables
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => { 
          // If the server sends an error response (invalid token) ❌
          // Update state variables
          console.log(error.response.data.message)
          removeToken();
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          navigate("/login");

        });
    } else {
      // If the token is not available
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const logOutUser = () => {
    // Upon logout, remove the token from the localStorage
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    // Run this code once the AuthProviderWrapper component in the App loads for the first time.
    // This effect runs when the application and the AuthProviderWrapper component load for the first time.
    authenticateUser();
  }, []);

  const getToken = () => {
    const storedToken = localStorage.getItem("authToken")
    return storedToken;

  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
        getToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };