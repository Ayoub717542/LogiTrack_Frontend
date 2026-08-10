import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../service/api";

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
                        fetchorders();
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error("Failed to delete order.");
                    });
            }
    return(
        <>
        <div>
            <table>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Date</th>
                    <th>Statut</th>
                    <th>order Id</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.dateCommande}</td>
                            <td>{order.statut}</td>
                            <td>{order.order.id}</td>
                            <td>
                    <button className="details-btn" onClick={() => navigate(`/orderDetails/${order.id}`)}>Details</button>
                    <button className="edit-btn" onClick={() =>  navigate(`/orderForm/${order.id}`)}><i className="fa-solid fa-pen"></i>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(order)}><i className="fa-solid fa-trash"></i>Delete</button>
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
