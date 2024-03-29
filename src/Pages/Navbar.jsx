import { Link } from 'react-router-dom';
import '../assets/navbar.css'
import logo from '../assets/logo.jpeg' ;
function Navbar() {
  return (
    <>
    <div className="navbar">
      <Link to="/" className="nav-link">
        <img src={logo} alt="LOGO" width='100px'/>
      </Link>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/add" className="nav-link">Add</Link>
      <Link to="/show-address" className="nav-link">Show Address</Link>
    </div>
    </>
  );
}

export default Navbar;
