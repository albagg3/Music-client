import './home.css'

import CreateBtn from "../../components/Navbar/Create";



const HomePage = () =>{
    return(
        <>
            <div className="container-full-page-home">
                <div className="fixed-btn">
                    <CreateBtn ></CreateBtn>
                </div>
            </div>
        </>
    )
}

export default HomePage;