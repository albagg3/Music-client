import './navBar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <>
        <nav className="navbar-container">
            <h1>MUSIC COMMUNITY</h1>
            {/* <Link className="link" to="/search">
                <div className='icon-box'>
                    <i className="fa-solid fa-plus icon"></i>
                    <p className='icon-text'>CREATE</p>
                </div>
            </Link> */}
            {/* <p>LOG IN</p> */}
        </nav>

        </>
    );
}

export default Navbar;