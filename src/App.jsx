import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./security/ProtectedRoute";
import RoleGuard from "./security/RoleGuard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

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
                </Route>

            </Route>

        </Routes>
    );
}

export default App;