import { useState } from "react";
import api from "../service/api";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import logo from "../assets/logo.svg";

function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState(null);

    const handleRegister = async (data) => {

        setRegisterError(null);

        try {

            const response = await api.post("/auth/register", {
                firstname: data.firstname,
                lastname: data.lastname,
                userEmail: data.userEmail,
                password: data.password,
            });

            if (response.data?.token) {
                localStorage.setItem("token", response.data.token);
            }

            navigate("/login", { replace: true });

        } catch (error) {

            console.log("Register error:", error);

            setRegisterError(
                error.response?.data?.message ||
                "Registration failed. Please check your details."
            );
        }
    };

    return (
        <div className="auth-page">

            <div className="auth-card register-card">

                <div className="auth-header">
                 <img src={logo} alt="LogiTrack Logo" className="auth-logo" />
                    <h1>Create account</h1>
                </div>

                <form
                    className="auth-form"
                    onSubmit={handleSubmit(handleRegister)}
                >

                    <div className="form-row">

                        <div className="form-group">
                            <label>First Name</label>

                            <input
                                type="text"
                                placeholder="John"
                                {...register("firstname", {
                                    required: "First name is required"
                                })}
                            />

                            {errors.firstname && (
                                <span className="field-error">
                                    {errors.firstname.message}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>

                            <input
                                type="text"
                                placeholder="Doe"
                                {...register("lastname", {
                                    required: "Last name is required"
                                })}
                            />

                            {errors.lastname && (
                                <span className="field-error">
                                    {errors.lastname.message}
                                </span>
                            )}
                        </div>

                    </div>

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="john.doe@gmail.com"
                            {...register("userEmail", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
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

                    {registerError && (
                        <div className="auth-error">
                            {registerError}
                        </div>
                    )}

                    <button
                        className="auth-button"
                        type="submit"
                    >
                        Create account
                    </button>

                </form>

                <div className="auth-footer">
                    <span>Already have an account?</span>

                    <NavLink to="/login">
                        Sign in
                    </NavLink>
                </div>

            </div>

        </div>
    );
}

export default Register;