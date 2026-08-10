import { useState } from "react";
import api from "../service/api";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import logo from "../assets/logo.svg";
import getUserRole from "../utils/auth";
function Login() {
    const {register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null);

    const handleLogin = async (data) => {
        setLoginError(null);

        try {
            const response = await api.post("/auth/login", {
                userEmail: data.userEmail,
                password: data.password,
            });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userEmail", data.userEmail);

            const role = getUserRole();
            console.log("User role:", role);
            navigate("/", { replace: true });
        } catch (error) {
            console.log(error.response?.status);
            console.log(error.response?.data);

            setLoginError(
                error.response?.data?.message ||
                "Login failed. Please check your credentials."
            );
        }
    };
    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                 <img src={logo} alt="LogiTrack Logo" className="auth-logo" />
                    <h1>Login</h1>
                </div>
                <form className="auth-form"  onSubmit={handleSubmit(handleLogin)} >
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="email12@gmail.com"
                            {...register("userEmail", {
                                required: "Email is required"
                            })}
                        />
                        {errors.userEmail && (
                            <span className="field-error">
                                {errors.userEmail.message}
                            </span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                        />
                        {errors.password && (
                            <span className="field-error">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    {loginError && (
                        <div className="auth-error">
                            {loginError}
                        </div>
                    )}
                    <button
                        className="auth-button"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                <div className="auth-footer">
                    <span>Don't have an account?</span>
                    <NavLink to="/register">
                        Create an account
                    </NavLink>
                </div>

            </div>

        </div>
    );
}

export default Login;