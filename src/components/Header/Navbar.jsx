import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

    return (
        <div>
            <nav className='usr2'>
                {/* <span>My webpage</span> */}
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/users'>Users</Link>
            </nav>
        </div>
    );
};

export default Navbar;