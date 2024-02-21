import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/Login'
import SignupPage from './pages/SignupPage/Signup'
import Navbar from './components/Navbar/Navbar'
import SearchPage from './pages/SearchPage/Search'
import HomePage from './pages/HomePage/Home'
import BottomNavBar from './components/BottomNavBar/BottomNavBar'

function App() {
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="/login" element={ <LoginPage />} />
                <Route path="/signup" element={ <SignupPage />} />
                {/* Si ya tienes una cancion elegida que no puedas crear a no ser que la borres */}
                <Route path="/search" element={ <SearchPage />} /> 
            </Routes>
           
        </>
    )
}

export default App
