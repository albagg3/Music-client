import './navBar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <>
        <Link className='link' to="/">
            <nav className="navbar-container">
                <h1>MUSIC COMMUNITY</h1>
            </nav>
        </Link>

        </>
    );
}

export default Navbar;