import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/clientDetails.css";
import api from "../service/api";

function ClientDetails() {

    const { id } = useParams();

    const [clientDetails, setClientDetails] = useState(null);

    function fetchClientDetails() {
        api.get(`/clients/getClientById/${id}`)
            .then((response) => {
                setClientDetails(response.data);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Error loading client details");
            });
    }

    useEffect(() => {
        fetchClientDetails();
    }, []);

    return (
        <div className="client-details">

            {clientDetails && (
                <div>
                    <h2>Client Details</h2>

                    <p>
                        <strong>ID:</strong> {clientDetails.id}
                    </p>

                    <p>
                        <strong>Name:</strong> {clientDetails.nom}
                    </p>

                    <p>
                        <strong>Email:</strong> {clientDetails.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {clientDetails.telephone}
                    </p>
                </div>
            )}

        </div>
    );
}

export default ClientDetails;