import ClientList from "../components/ClientList";
import { useNavigate } from "react-router-dom";
import "../styles/clients.css";

function Clients() {
    const navigate = useNavigate();

    return (
        <div className="clients-page">

            <div className="clients-header">
                <h2>Clients</h2>

                <button
                    onClick={() => navigate("/clientForm")}
                >
                    Add Client
                </button>
            </div>

            <ClientList />

        </div>
    );
}

export default Clients;