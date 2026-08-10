import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect ,useState  } from "react";
import "../styles/OrderForm.css";
import api from "../service/api";

function OrderForm() {

    const navigate = useNavigate();
    const { OrderId } = useParams();
    const [clients, setClients] = useState([]);


    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    useEffect(() => {
        api.get("/clients/getAllClientPagination")
            .then((response) => setClients(response.data.content))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        if (OrderId) {
            api.get(`/commandes/${OrderId}`)
                .then((response) => {
                    reset({
                        dateCommande: response.data.dateCommande,
                        statut: response.data.statut,
                        clientId: response.data.clientId
                    });

                })
                .catch((error) => {
                    console.error(error);
                    toast.error("Failed to load Order data.");
                });
        }

    }, [OrderId, reset]);


    function onSubmit(data) {
        if (OrderId) {
            api.put(`/commandes/updateCommande/${OrderId}`, data)
                .then(() => {
                    reset();
                    toast.success("Order updated successfully!");
                    navigate("/Orders");
                })
                .catch((error) => {
                    console.error(error);
                    toast.error("Something went wrong");
                });

        }
        else {
            api.post("/commandes/createCommande", data)
                .then(() => {
                    reset();
                    toast.success("Order added successfully!");
                    navigate("/Orders");
                })
                .catch((error) => {
                    console.error(error);
                    toast.error("An error occurred while adding the Order.");
                });
        }
    }
    return (
        <div className="Order-form-page">
            <h2>
                {OrderId ? "Edit Order" : "Add Order"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Date Order</label>

                <input
                    {...register("dateCommande")}
                    type="date"
                />
                <label>Statut</label>
                  <select {...register("statut")}>
                    <option value="PENDING">Pending</option>
                    <option value="SHIPPED">Shipped</option>
                    <option value="DELIVERED">Delivered</option>
                    <option value="CANCELLED">Cancelled</option>
                </select>

                <label>Client ID</label>
                <select {...register("clientId")}>
            <option value="">Select a client</option>
            {clients.map((client) => (
                <option key={client.id} value={client.id}>
                    {client.id} : {client.nom}
                </option>
            ))}
        </select>
                <button type="submit">
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/orders")}
                >
                    Cancel
                </button>

            </form>

        </div>
    );
}

export default OrderForm;