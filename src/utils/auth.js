import { jwtDecode } from "jwt-decode";

export function getUserRole() {
    const token = localStorage.getItem("token");

    if (!token) {
        return null;
    }

    try {
        const decoded = jwtDecode(token);

        const authorities = (decoded.authorities || []).map(item =>
            typeof item === "object" ? item.authority : item
        );

        console.log("Decoded JWT:", decoded);
        console.log("Authorities:", authorities);

        if (authorities.includes("ROLE_ADMIN")) {
            return "ADMIN";
        }

        if (authorities.includes("ROLE_MANAGER")) {
            return "MANAGER";
        }

        if (authorities.includes("ROLE_AGENT")) {
            return "AGENT";
        }

        return null;

    } catch (error) {
        console.error("JWT decoding error:", error);
        return null;
    }
}

export default getUserRole;