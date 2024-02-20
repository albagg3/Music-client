import './songSearched.css'

const SongSearched = (props) =>{
    const {artist, name, imageURL} = props.song;
    return (
        <>
            <div className='flex-center song-container'>
                <img className='small-img' src={imageURL} alt="" />
                <div className='text-container'>
                    <h4 className='primary-color-text'>{name}</h4>
                    <p className='primary-color-text'>{artist}</p>
                </div>
                    {/* <input type="radio" name="selectedSong" value={props.song} /> */}
                    <button className='btn-circle' type="submit"><i className="fa-solid fa-check"></i></button>
            </div>
        </>
    )
}

export default SongSearched