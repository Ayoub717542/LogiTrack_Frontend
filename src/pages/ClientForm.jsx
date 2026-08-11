import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import api from "../service/api";
import "../styles/ClientForm.css";

function ClientForm() {

    const navigate = useNavigate();
    const { clientId } = useParams();

    const {
        register,
        handleSubmit,
        reset, 
        formState:{errors}
    } = useForm();

    useEffect(() => {
        if (clientId) {
            api.get(`/clients/getClientById/${clientId}`)
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
            if (clientId) {
                api.put(`/clients/updateClient/${clientId}`, data)
                    .then(() => {
                        reset();
                        toast.success("Client updated successfully!");
                        navigate("/clients");
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error("Something went wrong");
                    });

            }
            else {
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
            <h2>
                {clientId ? "Edit Client" : "Add Client"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Full Name</label>

                <input
                    {...register(
                        "nom",{
                        required:"name is required"
                    })
                    }
                    type="text"
                />
                {errors.nom && (<p className="error_message">{errors.nom.message}</p>)}
                <label>Email</label>

                <input
                    {...register("email",{
                        required:"Email is required"
                    })}
                    type="email"
                />
                 {errors.email && (<p className="error_message">{errors.email.message}</p>)}
                <label>Phone</label>

                <input
                    {...register("telephone",
                        {required:"Phone number is required"}
                    )}
                    type="text"
                />
                 {errors.telephone && (<p className="error_message">{errors.telephone.message}</p>)}
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