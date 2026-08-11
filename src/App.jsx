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
import ClientDetails from "./pages/ClientDetails";
import OrderDetails from "./pages/OrderDetails";
import OrderForm from "./pages/OrderForm";
import OrderList from "./components/OrderList";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
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
                    <Route path="/orderForm/:id?" element={<OrderForm />}/>
                    <Route path="/clientDetails/:id?" element={<ClientDetails />}/>
                    <Route path="/orderDetails/:id?" element={<OrderDetails />}/>
                    <Route path="/clientList" element={<ClientList />}/>
                    <Route path="/orderList" element={<OrderList />}/>
                    

                    
                </Route>
            </Route>
          

        </Routes>
          <ToastContainer />
           </>
    );
}

export default App;