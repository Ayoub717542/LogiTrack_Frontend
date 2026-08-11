import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <h2>LogiTrack</h2>
            </div>

            <div className="navbar-right">

                <span className="user-icon">
                    <FaUserCircle />
                </span>

                <button onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;