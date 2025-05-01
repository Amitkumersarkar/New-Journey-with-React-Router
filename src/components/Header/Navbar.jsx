import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

    return (
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </nav>
    );
};

export default Navbar;