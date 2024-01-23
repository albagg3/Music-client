
const SignupPage = () =>{
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined);

    const handleUserName = (e) => setUserName(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(undefined)
        if(userName === "" || password === ""  || email == "")
            setErrorMessage("All the fields must be filled")
        else
        {
            const requestBody = {userName, password, email};
            authService
                .signup(requestBody)
                .then((response)=>{
                    console.log(response)
                    // If the POST request is successful redirect to login,
                    navigate("/login");
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
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleUserName}/>
                <input type="email" onChange={handleEmail}/>
                <input type="password" onChange={handlePassword}/>
                <button>LOG IN</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
    );
}

export default SignupPage;