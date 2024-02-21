import './bottomNavBar.css'
import { Link, useLocation } from 'react-router-dom'

import CreateBtn from "../../components/Create/Create";
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
const URL = import.meta.env.VITE_SERVER_URL;


const BottomNavBar = ({song, setSongResult}) => {

    const { isLoggedIn, logOutUser, getToken } = useContext(AuthContext)
    
    const location = useLocation();
    let content = null;
    // console.log(setSongResult())
    
    const handleSearchSubmit = async(e) =>{
        // e.preventDefault();
        try{
            const response = await fetch(URL + `/searchSong?song=${song}`, {headers:{"Authorization":`Bearer ${getToken()}`}})
            const songs = await response.json();
            console.log(songs.songs);
            setSongResult(songs.songs);
        }catch(error)
        {
            console.log(error);
        }
        
    }


    const handleLogOut = () =>{
        logOutUser();
    }

    if(isLoggedIn)
    {
        if(location.pathname === '/search')
        {
            content = (
                <>
                    <button className='search-btn' type="submit" onClick={handleSearchSubmit} >
                        <i className="fa-solid fa-magnifying-glass icon"></i>
                        <p className='icon-text'>SEARCH</p>
                    </button>

                </>
            )
        }
        if(location.pathname === '/')
        {
            content = (
                <>
                    <Link className="link" to="/search">
                        <i className="fa-solid fa-plus icon"></i>
                        <p className='self-align icon-text'>CREATE</p>
                    </Link>
                </>
            )
        }
    }

    return (
        <>
            <nav className='bottom-nav'>
                {isLoggedIn ?
                <div>
                    <div className="fixed-btn">
                        <CreateBtn >
                            {content}
                        </CreateBtn>
                    </div>
                    <Link to="/login">
                        <div className='logout'>
                            <button className='transparent-btn' onClick={handleLogOut}>
                                <i className="icon primary-color-text fa-solid fa-person-running "></i>
                            </button>
                        </div>
                    </Link>
                </div>
                    :
                    <Link className="link" to="/login">
                        <div className="fixed-btn">
                            <CreateBtn >
                                <p className='icon-text'>LOG IN</p>
                            </CreateBtn>
                        </div>
                    </Link>
                }
            </nav>
        </>
    )
}

export default BottomNavBar