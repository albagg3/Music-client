import './songSearched.css'
const URL = import.meta.env.VITE_SERVER_URL;
import { AuthContext } from '../../context/auth.context';
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom'

const SongSearched = (props) =>{
    const {artist, name, imageURL, preview} = props.song;
    const {getToken} = useContext(AuthContext);
    const navigate = useNavigate();

    const createSong = async() =>{
        // e.preventDefault();
        try{
            const response = await fetch(URL + `/createSong`, {
                method:'POST',
                headers:{
                    "Authorization":`Bearer ${getToken()}`,
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({title:name, artist, imageURL, previewURI:preview})

            })
            navigate("/")
            
        }catch(error)
        {
            console.log(error);
        }
        
    }

    return (
        <>
            <div className='flex-center song-container'>
                <img className='small-img' src={imageURL} alt="" />
                <div className='text-container'>
                    <h4 className='primary-color-text'>{name}</h4>
                    <p className='primary-color-text'>{artist}</p>
                    {/* <audio className='audio' controls  src={preview}></audio> */}
                </div>
                    <button className='btn-circle' type="submit" onClick={createSong}>
                        <i className="fa-solid fa-check"></i>
                    </button>
            </div>
        </>
    )
}

export default SongSearched