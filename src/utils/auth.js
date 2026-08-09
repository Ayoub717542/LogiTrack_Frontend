import { jwtDecode } from "jwt-decode";

export function getUserRole(){
    const token = localStorage.getItem("token");

    if(!token){
        return null;
    }

    try {
        const decoded = jwtDecode(token);
        const authorities = (decoded.authorities || []).map(item =>
            typeof item === "object" ? item.authority : item
        );

    if(decoded.authorities?.includes("ROLE_ADMIN")){
        return "ADMIN"

    }else if(decoded.authorities?.includes("ROLE_MANAGER")){
                return "MANAGER";

    } if (decoded.authorities?.includes("ROLE_AGENT")) {
        return "AGENT";
    }

    return null;
} 
catch (e) {
        return null;
    }
}

export default getUserRole;