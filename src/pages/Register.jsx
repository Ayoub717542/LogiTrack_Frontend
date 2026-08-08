import { useState } from "react";
import api from "../service/api";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
        error.response?.data?.message || "Registration failed. Please check your details."
      );
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-left">
          <h1>Create Account</h1>
          <p>Join LogiTrack and start managing your logistics easily.</p>
          <p>
            Already have an account?
            <NavLink to="/login"> Login</NavLink>
          </p>
        </div>

        <div className="auth-card">
          <div>
            <form className="auth-form" onSubmit={handleSubmit(handleRegister)}>
              <label>First Name</label>
              <input
                type="text"
                placeholder="John"
                {...register("firstname", {
                  required: "First name is required",
                })}
              />
              {errors.firstname && (
                <p style={{ color: "red" }}>{errors.firstname.message}</p>
              )}

              <label>Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                {...register("lastname", {
                  required: "Last name is required",
                })}
              />
              {errors.lastname && (
                <p style={{ color: "red" }}>{errors.lastname.message}</p>
              )}

              <label>Email</label>
              <input
                type="email"
                placeholder="john.doe@gmail.com"
                {...register("userEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.userEmail && (
                <p style={{ color: "red" }}>{errors.userEmail.message}</p>
              )}

              <label>Password</label>
              <input
                type="password"
                placeholder="******"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}

              {registerError && (
                <p style={{ color: "red" }}>{registerError}</p>
              )}

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;