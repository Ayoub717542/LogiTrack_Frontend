import "../styles/RecentOrders.css"
import api from "../service/api";
import { useEffect ,useState} from "react";

function RecentOrders() {
    const [recentOrders,setRecentOrders] = useState([]);
    
useEffect(() =>{
    api.get("/commandes/recentCommandes").then((response) =>{
                console.log(JSON.stringify(response.data.content, null, 2));
        setRecentOrders(response.data.content);
    }).catch((error) =>{
        console.error(error)
    })
},[])

    return (
        <>
        <div className="recent-orders">
            <h2>Recent Orders</h2>

            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Client</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {recentOrders && recentOrders.length > 0 ? (
                        recentOrders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.client?.nom}</td>
                                <td>{order.dateCommande}</td>
                                <td>{order.statut}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No recent orders</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    );
}
export default RecentOrders;