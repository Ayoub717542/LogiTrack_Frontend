import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../service/api";

function ClientList(){

    const navigate = useNavigate();
    const [clients,setClients] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [sortOrder, setSortOrder] = useState("asc");


    function fetchClients(){
        api.get("/clients/getAllClientPagination").then(
            (response) => {
                setClients(response.data.content); 
            }
        )
        .catch((error) => console.error(error));
    }

    function handleDelete(client){
        if(!window.confirm(`Delete client ${client.nom}?`)) return;

        api.delete(`/clients/${client.id}`)
            .then(() => {
                toast.success("Client deleted successfully!");
                fetchClients();
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to delete client.");
            });
    }

    useEffect(()=>
        {
            fetchClients();
        },[])

    return(<div>
        <table  className="client-list">
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>full name</th>
                    <th>telephon</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.email}</td>
                        <td>{client.nom}</td>
                        <td>{client.telephone}</td>
                        <td>
                    <button className="details-btn" onClick={() => navigate(`/clientDetails/${client.id}`)}>Details</button>
                    <button className="edit-btn" onClick={() =>  navigate(`/clientForm/${client.id}`)}><i className="fa-solid fa-pen"></i>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(client )}><i className="fa-solid fa-trash"></i>Delete</button>
                  </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div> 
    )
}
export default ClientList