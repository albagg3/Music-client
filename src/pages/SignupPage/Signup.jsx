import { useState, useContext } from "react";
import authService from "../../services/auth.service";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

const SignupPage = () =>{
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(undefined);

    const handleUserName = (e) => setUserName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(undefined)
        if(userName === "" || password === ""  || email == "")
            setMessage("All the fields must be filled")
        else
        {
            const requestBody = {userName, password, email};
            authService
                .signup(requestBody)
                .then((response)=>{
                    console.log(response)
                    // If the POST request is successful redirect to login,
                    setMessage(response.data.message);
                    setTimeout(()=>{
                        navigate("/login");
                    },1000);
                })
                .catch((error) =>{
                    console.log(error);
                    setMessage(error.response.data.message);
                })
        }
    //ENVIAR LOS DATOS DE USER Y PASSWORD AL BACK para esto usamos el servicio de Authservice
    //si todo va bien redirigimos al home del usuario
    //si no va bien mandamos error y renderizamos 
    } 

    return(
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleUserName}/>
                <input type="email" onChange={handleEmail}/>
                <input type="password" onChange={handlePassword}/>
                <button>SIGN UP</button>
            </form>
            {message && <p className="error-message">{message}</p>}
        </>
    );
}

export default SignupPage;