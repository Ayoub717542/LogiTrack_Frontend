import OrderList from "../components/OrderList";
import { useNavigate } from "react-router-dom";
import "../styles/Orders.css";

function Orders() {
    const navigate = useNavigate();

    return (
        <div className="orders-page">
            <div className="orders-header">
                <h2>Orders</h2>
                <button
                    onClick={() => navigate("/orderForm")}
                >
                    Add An Order
                </button>
            </div>

            <OrderList />

        </div>
    );
}
export default Orders;