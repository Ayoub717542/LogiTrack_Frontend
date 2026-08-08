import { Navigate, Outlet  } from "react-router-dom";
import getUserRole from "../../utils/getUserRole";

function RoleGuard({allowedRoles}){
    const role = getUserRole();

    if (!role) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/access-denied" replace />;
    }

    return <Outlet />;
}