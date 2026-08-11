import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../service/api";
import "../styles/ClientList.css"
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";

function ClientList(){
    

    const navigate = useNavigate();
    const [clients,setClients] = useState([]);


    const [open, setOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);



    function fetchClients(){

        api.get("/clients/getAllClientPagination").then(
            (response) => {
                setClients(response.data.content); 
            }
        )
        .catch((error) => console.error(error));
    }




    function handleDelete(){
        api.delete(`/clients/deleteClient/${selectedClient.id}`)
            .then(() => {
                toast.success("Client deleted successfully!");
                fetchClients();
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to delete client.");
            });
            setOpen(false);
    }
    useEffect(()=>
        {
            fetchClients();
        },[])

    return(
    <>
     <Dialog
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="delete-dialog-title"
>
    <DialogTitle id="delete-dialog-title">
        Delete Client?
    </DialogTitle>

    <DialogContent>
        <DialogContentText>
            Are you sure you want to delete{" "}
            {selectedClient?.nom} ?
        </DialogContentText>
    </DialogContent>

    <DialogActions>
        <Button onClick={() => setOpen(false)}> Cancel</Button>
        <Button onClick={handleDelete} color="error">Delete</Button>
    </DialogActions>
</Dialog>
    <div>
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

                    <button className="details-btn" onClick={() => navigate(`/clientDetails/${client.id}`)}><FaEye /></button>
                    <button className="edit-btn" onClick={() =>  navigate(`/clientForm/${client.id}`)}>    <FaEdit />  </button>
                    <button className="delete-btn" onClick={() => {setSelectedClient(client); setOpen(true); }}> <FaTrash /></button>

                  </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div> 
    </>
    )
}
export default ClientList