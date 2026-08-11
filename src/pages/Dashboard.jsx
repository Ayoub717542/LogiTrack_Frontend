import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import LowStockProducts from "../components/LowStockProducts";
import RecentOrders from "../components/RecentOrders";
import { useNavigate } from "react-router-dom";
import api from "../service/api";
import "../Styles/Dashboard.css";


function Dashboard() {
const navigate = useNavigate();

 function Logout(){
        localStorage.clear();
        navigate("/login", {replace: true});
    }

const [counts, setCounts] = useState({
        clients: 0,
        products: 0,
        orders: 0
    });

   const [orderStatus, setOrderStatus] = useState({
        pending: 0,
        shipped: 0,
        delivered: 0,
        countCanceled: 0
    });

useEffect(()=>{
    Promise.all([
    api.get("/products/countProducts"),
    api.get("/commandes/countCommandes"),
    api.get("/clients/countClients"),

    ]).then(([products,orders,clients])=>{
        setCounts({
            clients : clients.data,
            orders: orders.data,
            products:products.data
        });
    }).catch((error) => console.error(error));
},[])

useEffect(()=>{
    Promise.all([
    api.get("/commandes/countPending"),
    api.get("/commandes/countShipped"),
    api.get("/commandes/countDelivered"),
    api.get("/commandes/countCanceled")

    ]).then(([countPending,countShipped,countDelivered,countCanceled])=>{
        setOrderStatus({
            countPending :countPending.data,
            countShipped:countShipped.data,
            countDelivered:countDelivered.data,
            countCanceled:countCanceled.data
        });
    }).catch((error) => console.error(error));
},[])

    return (
      <div className="dashboard">
        

    <section>
        <div className="dashboard-cards">
            <DashboardCard
                title="Clients"
                value={counts.clients}
                onClick={() => navigate("/clients")}
            />

            <DashboardCard
                title="Products"
                value={counts.products}
                onClick={()=> navigate("/products")}
            />

            <DashboardCard
                title="Orders"
                value={counts.orders}
                onClick={() => navigate("/orders")}
            />
        </div>
    </section>

    <section>
        <h2>Order Status</h2>

        <div className="status-cards">
            <DashboardCard
                title="Pending"
                value={orderStatus.countPending}
            />

            <DashboardCard
                title="Shipped"
                value={orderStatus.countShipped}
            />

            <DashboardCard
                title="Delivered"
                value={orderStatus.countDelivered}
            />
             <DashboardCard
                title="CANCELLED"
                value={orderStatus.countCanceled}
            />
        </div>
    </section>

    <div className="dashboard-bottom">
        <LowStockProducts  />
        <RecentOrders />
         <button className="logout-btn" onClick={Logout} >
          Logout
        </button>
    </div>

</div>
    );
}

export default Dashboard;