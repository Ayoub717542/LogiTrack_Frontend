import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./security/ProtectedRoute";
import RoleGuard from "./security/RoleGuard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import ClientForm from "./pages/ClientForm";
import ClientList from "./components/ClientList";
function App() {
    return (
        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute />}>

                <Route element={
                    <RoleGuard
                        allowedRoles={["ADMIN", "MANAGER", "AGENT"]}
                    />
                }>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/clients" element={<Clients />}/>

                    <Route path="/products" element={<Products />}/>
                    <Route path="/orders" element={<Orders />}/>
                    <Route path="/clientForm/:clientId?" element={<ClientForm />} />
                    <Route path="/clientList" element={<ClientList />}/>
                    
                </Route>
            </Route>

        </Routes>
    );
}

export default App;