function RecentOrders({ recentOrders }) {
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
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {recentOrders && orders.length > 0 ? (
                        recentOrders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.clientName}</td>
                                <td>{order.date}</td>
                                <td>{order.total} DH</td>
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