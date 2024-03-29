import { Link } from 'react-router-dom';
import '../assets/navbar.css'
function Navbar() {
  return (
    <>
    <div className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/add" className="nav-link">Add</Link>
      {/* <Link to="/alter" className="nav-link">Alter</Link> */}
      <Link to="/show-address" className="nav-link">Show Address</Link>
    </div>
    </>
  );
}

export default Navbar;
