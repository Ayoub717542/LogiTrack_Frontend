import { jwtDecode } from "jwt-decode";

export function getUserRole(){
    const token = localStorage.getItem("token");

    if(!token){
        return null;
    }

    const decoded = jwtDecode(token);

    if(decoded.authorities?.includes("ROLE_ADMIN")){
        return "ADMIN"

    }else if(decoded.authorities?.includes("Role_MANAGER")){
                return "MANAGER";

    } if (decoded.authorities?.includes("ROLE_AGENT")) {
        return "AGENT";
    }
    
    return null;

}
export default getUserRole;