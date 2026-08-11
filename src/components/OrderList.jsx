import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/OrdersList.css"
import api from "../service/api";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function OrderList(){

    const navigate = useNavigate();
    const [orders,setOrders] = useState([]);

    function fetchOrders(){
        api.get("/commandes/commandes").then((response) =>{
            setOrders(response.data.content);
        })
        .catch((error) =>{
            console.error(error);
        })
    }

  useEffect(()=>
        {
            fetchOrders();
        },[])

            function handleDelete(order){
                if(!window.confirm(`Delete Order ${order.nom}?`)) return;
                api.delete(`/commandes/delete/${order.id}`)
                    .then(() => {
                        toast.success("order deleted successfully!");
                        fetchOrders();
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error("Failed to delete order.");
                    });
            }
    return(
        <>
        <div>
            <table className="order-list">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Date</th>
                    <th>Statut</th>
                    <th>Client Id</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.dateCommande}</td>
                            <td>{order.statut}</td>
                            <td>{order.client?.id}</td>
                            <td>
                    <button className="details-btn" onClick={() => navigate(`/orderDetails/${order.id}`)}><FaEye /></button>
                    <button className="edit-btn" onClick={() =>  navigate(`/orderForm/${order.id}`)}><FaEdit /></button>
                    <button className="delete-btn" onClick={() => handleDelete(order)}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>

    )


}
export default OrderList;
