import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    {/* <img src="/path/to/logo.png" alt="Logo" className="logo" /> */}
                </Link>
                <p>Review & Rate</p>
            </div>
            <div className="navbar-right">
                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-barr" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
                <Link to="/signup" className="btn btn-signup">
                    Sign Up
                </Link>
                <Link to="/signin" className="btn btn-signin">
                    Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
