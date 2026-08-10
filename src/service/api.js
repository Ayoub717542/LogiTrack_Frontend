import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
    baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        toast.error("Request error");
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log(
            "Received Response:",
            response.status,
            response.config.url,
            response.data
        );

        return response;
    },
    (error) => {
        if (error.response) {

            switch (error.response.status) {

                case 401:
                    console.log(
                        "401 Unauthorized:",
                        error.config?.url
                    );

                    if (!window.location.pathname.includes("/login")) {
                        toast.error("Session expired. Please login again.");


                    }
                    break;

                case 403:
                    console.log(
                        "403 Forbidden:",
                        error.config?.url
                    );
                    break;

                case 404:
                    console.log("Resource not found.");
                    break;

                case 500:
                    console.log(
                        "Server Error: Something went wrong on the server."
                    );
                    break;

                default:
                    console.log(
                        `Unhandled HTTP Error: Status ${error.response.status}`
                    );
            }

        } else if (error.request) {

            console.log(
                "No response received from the server."
            );

        } else {

            console.log(
                "Error setting up the request:",
                error.message
            );
        }

        return Promise.reject(error);
    }
);

export default api;