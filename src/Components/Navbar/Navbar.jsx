import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="leftBar">PORTFOLIO</div>
        <div className="rightBar">
            <ul>
                
                <Link to="/home"><li>HOME</li></Link>
                <Link to="/education"><li>EDUCATION</li></Link>
                <Link to="/skills"><li>SKILLS</li></Link>
                <Link to="/project"><li>PROJECTS</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
                
                
                
                
            </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
