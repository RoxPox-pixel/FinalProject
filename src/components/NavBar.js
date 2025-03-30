import { Link } from "react-router-dom";
import "./NavBar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Children's Books</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
