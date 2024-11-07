import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"><h1><b>PgRooms</b></h1></span>
        </Link>
        {user ? <h2>{`Hi, ${
        user.username.replace(/^./, user.username[0].toUpperCase())}`}</h2>: (
          <div className="navItems">

            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Login</button>
          
        </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
