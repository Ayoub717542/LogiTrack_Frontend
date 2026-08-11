import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/OrderDetails.css";
import api from "../service/api";

function OrderDetails() {

    const { id } = useParams();

    const [orderDetails, setOrderDetails] = useState(null);

    function fetchOrderDetails() {
        api.get(`/commandes/commande/${id}`)
            .then((response) => {
                setOrderDetails(response.data);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Error loading order details");
            });
    }

    useEffect(() => {
        fetchOrderDetails();
    }, [id]);

    return (
        <div className="Order-details">

            {orderDetails && (
                <div>
                    <h2>Order Details</h2>

                    <p>
                        <strong>ID:</strong> {orderDetails.id}
                    </p>

                    <p>
                        <strong>Date:</strong> {orderDetails.dateCommande}
                    </p>

                    <p>
                        <strong>Statut:</strong> {orderDetails.statut}
                    </p>

                    <h3>Client</h3>

                    <p>
                        <strong>Client ID:</strong>{" "}
                        {orderDetails.client?.id}
                    </p>

                    <p>
                        <strong>Name:</strong>{" "}
                        {orderDetails.client?.nom}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {orderDetails.client?.email}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {orderDetails.client?.telephone}
                    </p>

                </div>
            )}

        </div>
    );
}

export default OrderDetails;