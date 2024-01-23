import axios from 'axios'

//This class is going to help to authenticate the user between the front and the back
//It will provide information to the back to create a JWT to protect the data from the user
//In case the token is already done it will provide that information in the headers
class AuthService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })
        // Automatically set JWT token on the request headers for every request
        this.api.interceptors.request.use((config) => {
            // Retrieve the JWT token from the local storage
            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });
    }

    //Methods
    login = (requestBody) => {
        return this.api.post("/auth/login",requestBody)
    }
    signup = (requestBody) => {
        return this.api.post("/auth/signup",requestBody)
    }
    verify = () => {
        return this.api.get("/auth/verify")
    }
}

// Create one instance (object) of the service
const authService = new AuthService();

export default authService;