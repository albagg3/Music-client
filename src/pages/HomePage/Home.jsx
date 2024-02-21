import './home.css'
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import { useEffect, useState } from 'react';
const URL = import.meta.env.VITE_SERVER_URL;

const HomePage = () =>{
    const [posts, setPosts] = useState([]);
    const fetchPosts = async() =>{
        try{
            const response =  await fetch(URL + `/`)
            const postsData = await response.json();
            console.log(posts.posts);
            posts = posts.posts;
            //En cada post neceasitamos esta info
            // const {artist, comments, previewURI, title} = posts;
            // const owner = posts.owner 
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchPosts()
    },[])

    return(
        <>

        <BottomNavBar/>
        </>
    )
}

export default HomePage;