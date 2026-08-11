import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaUsers,
    FaBox,
    FaShoppingCart
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
    const userEmail = localStorage.getItem("userEmail");


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

    <div className="bottom">
         <div>
          <small>{userEmail}</small>
        </div>
      </div>
            </nav>

        </aside>
    );
}

export default Sidebar;