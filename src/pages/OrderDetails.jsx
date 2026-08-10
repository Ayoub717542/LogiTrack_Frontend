import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/orderDetails.css";
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
    }, []);

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
                    <p>
                        <strong>Client Id:</strong> {orderDetails.client.id}
                    </p>
                    <p>
                        <strong>Client Name:</strong> {orderDetails.client.nom}
                    </p>
                    <p>
                        <strong>Client Email:</strong> {orderDetails.client.email}
                    </p>
                    <p>
                        <strong>Client Phone:</strong> {orderDetails.client.telephone}
                    </p>
                </div>
            )}

        </div>
    );
}

export default OrderDetails;