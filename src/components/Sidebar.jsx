import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaUsers,
    FaBox,
    FaShoppingCart
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {

    return (
        <aside className="sidebar">

            <h3>Menu</h3>

            <nav>

                <NavLink to="/" end>
                    <FaHome />
                    Dashboard
                </NavLink>

                <NavLink to="/clients">
                    <FaUsers />
                    Clients
                </NavLink>

                <NavLink to="/products">
                    <FaBox />
                    Products
                </NavLink>

                <NavLink to="/orders">
                    <FaShoppingCart />
                    Orders
                </NavLink>

            </nav>

        </aside>
    );
}

export default Sidebar;