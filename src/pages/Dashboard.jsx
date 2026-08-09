import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import LowStockProducts from "../components/LowStockProducts";
import RecentOrders from "../components/RecentOrders";
import api from "../service/api";
import "../styles/Dashboard.css";


function Dashboard() {
const [recentOrders, setRecentOrders] = useState([]);
const [lowStockProducts, setLowStockProducts] = useState([]);

    
const [counts, setCounts] = useState({
        clients: 0,
        products: 0,
        orders: 0
    });

   const [orderStatus, setOrderStatus] = useState({
        pending: 0,
        shipped: 0,
        delivered: 0
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

useEffect(() =>{
    api.get("/commandes/recentCommandes")
    .then((recentOrders) => {
        setRecentOrders(recentOrders.data)
    })
},[])

useEffect(()=>{
    Promise.all([
    api.get("/orders/countPending"),
    api.get("/orders/countShipped"),
    api.get("/orders/countDelivered")

    ]).then(([countPending,countShipped,countDelivered])=>{
        setOrderStatus({
            countPending :countPending.data,
            countShipped:countShipped.data,
            countDelivered:countDelivered.data
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
                    />

                    <DashboardCard
                        title="Products"
                        value={counts.products}
                    />

                    <DashboardCard
                        title="Orders"
                        value={counts.orders}
                    />

                </div>
            </section>

            <section>
                <h2>Order Status</h2>

                <div className="dashboard-cards">

                    <DashboardCard
                        title="Pending"
                        value={orderStatus.PENDING}
                    />

                    <DashboardCard
                        title="Shipped"
                        value={orderStatus.SHIPPED}
                    />

                    <DashboardCard
                        title="Delivered"
                        value={orderStatus.DELIVERED}
                    />

                </div>
            </section>

<div className="dashboard-bottom">

    <LowStockProducts products={lowStockProducts} />

    <RecentOrders orders={recentOrders} />

</div>

        </div>
    );
}

export default Dashboard;