import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import "../styles/clientForm.css";
import api from "../service/api";

function ClientForm() {
    const navigate = useNavigate();
    const { clientId } = useParams();
    const [editingId, setEditingId] = useState(null);

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    useEffect(() => {
        if (clientId) {
            setEditingId(clientId);
            api.get(`/clients/${clientId}`)
                .then((response) => {
                    reset({
                        nom: response.data.nom,
                        email: response.data.email,
                        telephone: response.data.telephone
                    });
                })
                .catch((error) => {
                    console.error(error);
                    toast.error("Failed to load client data.");
                });
        }
    }, [clientId, reset]);

    function onSubmit(data) {
        if (editingId) {
            api.put(`/clients/updateClient/${editingId}`, data)
                .then(() => {
                    setEditingId(null);
                    reset();
                    toast.success("Client updated successfully!");
                    navigate("/clients");
                })
                .catch(() => {
                    toast.error("Something went wrong");
                });
        } else {
            api.post("/clients/addClient", data)
                .then(() => {
                    reset();
                    toast.success("Client added successfully!");
                    navigate("/clients");
                })
                .catch((error) => {
                    console.error(error);
                    toast.error("An error occurred while adding the client.");
                });
        }
    }

    return (
        <div className="client-form-page">
            <h2>{editingId ? "Edit Client" : "Add Client"}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Full Name</label>
                <input
                    {...register("nom")}
                    type="text"
                />
                <label>Email</label>
                <input
                    {...register("email")}
                    type="email"
                />
                <label>Phone</label>
                <input
                    {...register("telephone")}
                    type="text"
                />
                <button type="submit">
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/clients")}
                >
                    Cancel
                </button>

            </form>

        </div>
    );
}

export default ClientForm;