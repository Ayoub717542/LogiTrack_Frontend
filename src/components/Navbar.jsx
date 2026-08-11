import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import "../Styles/Navbar.css";
import logo from "../assets/logo.svg";

function Navbar() {

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <img src={logo} alt="LogiTrack Logo" className="dashboard-logo"/>
            </div>

            <div className="navbar-right">

                <button onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;