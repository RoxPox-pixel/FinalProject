import { Link } from "react-router-dom";
import "./NavBar.css"; 
import { useState, useEffect } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user"); 
    if (user) {
      setIsLoggedIn(true); 
    }

    const handleStorageChange = () => {
      const user = localStorage.getItem("user");
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };


  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">Children's Books</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Books">Books</Link>
        </li>

        
        {
        (() => {
          if (isLoggedIn) {
            return (
              <>
                <li>
                  <Link to="/Add-Book">Add Book</Link>
                </li>
                <li>
                  <Link to="/MyProfile">My Profile</Link>
                </li>
              </>
            );
          } else {
            return (
              <>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/Register">Register</Link>
                </li>
              </>
            );
          }
        })()}
      </ul>
    </nav>
  );
}

export default Navbar;
