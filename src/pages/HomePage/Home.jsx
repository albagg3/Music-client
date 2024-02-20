import './home.css'

import CreateBtn from "../../components/Create/Create";
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';


const HomePage = () =>{
    const{ isLoggedIn} = useContext(AuthContext)
    return(
        <>
            <div className="container-full-page-home">
                <div className="fixed-btn">
                {
                    isLoggedIn?<CreateBtn ></CreateBtn> : ""
                }
                </div>
            </div>
        </>
    )
}

export default HomePage;