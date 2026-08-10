import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useEffect } from "react";
import "../styles/clientForm.css";
>>>>>>> management
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

<<<<<<< HEAD
    function onSubmit(data) {
        if (clientId) {
            api.put(`/clients/updateClient/${clientId}`, data)
                .then(() => {
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
                    toast.error("Something went wrong while updating the client.");
                });
=======

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
>>>>>>> management
        }


    return (
        <div className="client-form-page">
<<<<<<< HEAD
            <h2>{clientId ? "Edit Client" : "Add Client"}</h2>
=======

            <h2>
                {clientId ? "Edit Client" : "Add Client"}
            </h2>

>>>>>>> management
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
<<<<<<< HEAD
                {errors.nom && (<p className="error_message">{errors.nom.message}</p>)}
=======


>>>>>>> management
                <label>Email</label>

                <input
                    {...register("email",{
                        required:"Email is required"
                    })}
                    type="email"
                />
<<<<<<< HEAD
                 {errors.email && (<p className="error_message">{errors.email.message}</p>)}
=======


>>>>>>> management
                <label>Phone</label>

                <input
                    {...register("telephone",
                        {required:"Phone number is required"}
                    )}
                    type="text"
                />
<<<<<<< HEAD
                 {errors.telephone && (<p className="error_message">{errors.telephone.message}</p>)}
=======


>>>>>>> management
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