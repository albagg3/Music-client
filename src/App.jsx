import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/Login'
import SignupPage from './pages/SignupPage/Signup'
import Navbar from './components/Navbar/Navbar'


function App() {
    return(
        <>

        <Navbar/>
        <Routes>
            <Route path="/login" element={ <LoginPage />} />
            <Route path="/signup" element={ <SignupPage />} />
        </Routes>
        </>

    )
}

export default App
