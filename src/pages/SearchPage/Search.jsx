import './search.css'

import { useState, useContext } from 'react'
const URL = import.meta.env.VITE_SERVER_URL;
import SongSearched from '../../components/SongSearched/SongSearched';
import { AuthContext } from '../../context/auth.context';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';


const SearchPage = () =>{
    const [song, setSong] = useState("")
    const [songsResult, setSongResult] = useState([]);
    const { getToken } = useContext(AuthContext);

    const handleSearch = (e) => setSong(e.target.value);
    
    const handleSearchSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await fetch(URL + `/searchSong?song=${song}`, {headers:{"Authorization":`Bearer ${getToken()}`}})
            const songs = await response.json();
            // console.log(songs.songs);
            setSongResult(songs.songs);
        }catch(error)
        {
            console.log(error);
        }
        
    }

    return(
        <>
            <div className='search-bar-container'>
                <h3 className='primary-color-text align-self-center' >SEARCH</h3>
                <form className='flex-center' onSubmit={handleSearchSubmit}>
                    <input className='input' type="text" onChange={handleSearch}/>
                </form>
            </div>
            {songsResult.length !== 0 && songsResult.map((song)=>{
                return (
                    <div>
                            <SongSearched song={song} />
                    </div>
                )
            })
            }
            <BottomNavBar song={song} setSongResult={setSongResult} />
        </>
    )
}

export default SearchPage;