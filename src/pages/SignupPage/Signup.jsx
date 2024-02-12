import { useState, useContext } from "react";
import authService from "../../services/auth.service";
import { AuthContext } from "../../context/auth.context";
import { useNavigate, Link } from "react-router-dom";

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
        <section className='container-full-page-auth'>
            <div className='container-form-title'>
                <p>SIGN UP</p>
                <form  className='auth-form' onSubmit={handleSubmit}>
                    <label htmlFor="">Username:</label>
                    <input className='input' type="text" onChange={handleUserName}/>
                    <label htmlFor="">Email:</label>
                    <input className='input' type="email" onChange={handleEmail}/>
                    <label htmlFor="">Password:</label>
                    <input className='input' type="password" onChange={handlePassword}/>
                    <button className="btn">SIGN UP</button>
                </form>
                <div className='flex-column-center'>
                        <p>Already have an account?</p>
                        <Link to='/login'><p className='link'>Log in</p></Link>
                    </div>
            </div>
        </section>
            {message && <p className="error-message">{message}</p>}
        </>
    );
}

export default SignupPage;