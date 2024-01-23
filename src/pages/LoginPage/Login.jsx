import { useState, useContext } from "react";
import authService from "../../services/auth.service";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";


const LoginPage = () =>{
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined);

    const { storeToken, authenticateUser } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleUserName = (e) => setUserName(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(undefined)
        if(userName === "" || password === "")
            setErrorMessage("All the fields must be filled")
        else
        {
            const requestBody = {userName, password};
            authService
                .login(requestBody)
                .then((response)=>{
                    console.log(response)
                    // If the POST request is successful store the authentication token,
                    // after the token is stored authenticate the user
                    // and at last navigate to the home page
                    // storeToken(response);habra que ver que recibimos
                    authenticateUser();
                    navigate("/");
                })
                .catch((error) =>{
                    console.log(error);
                    setErrorMessage(error.response.data.message);
                })
        }
    //ENVIAR LOS DATOS DE USER Y PASSWORD AL BACK para esto usamos el servicio de Authservice
    //si todo va bien redirigimos al home del usuario
    //si no va bien mandamos error y renderizamos 
    } 
    return(
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleUserName}/>
                <input type="password" onChange={handlePassword}/>
                <button>LOG IN</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
    );
}

export default LoginPage;