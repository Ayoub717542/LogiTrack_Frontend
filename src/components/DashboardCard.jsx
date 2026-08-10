
import React from "react";
import "../Styles/DashboardCard.css"

function DashboardCard({ title, value ,onClick }) {
    return (
        <div className="dashboard-card" onClick={onClick}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
}

export default DashboardCard;

