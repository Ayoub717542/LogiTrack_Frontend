import { useState } from "react";
import api from "../service/api";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm();
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
      navigate("/",{replace:true}); 

    } catch (error) {
    console.log(error.response?.status);
    console.log(error.response?.data);
    console.log(error.response?.headers);
    setLoginError(
      error.response?.data?.message || "Login failed. Please check your credentials."
    );
    }
  };
    
    return (
            <>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label>Email</label>
                    <input type="text"
                    placeholder="email12@gmail.com"
                     {...register("userEmail" ,{
                        required:"Email is Required"
                     }) } />
                     {errors.userEmail && (<p>{errors.userEmail.message}</p>)}
                     
                      <label>Password</label>
                    <input type="password"
                     {...register("password" ,{
                        required:"Password is Required",
                        minLength:{value:6, message:"Password must be at least 6 characters"
                        }
                     }) } />
                     {errors.password && (<p>{errors.password.message}</p>)}
                    {loginError && <p style={{ color: "red" }}>{loginError}</p>}
                    <button type="submit">Login</button>
                    <p>
                        Don't have an account?
                        <NavLink to="/register"> Register</NavLink>
                    </p>

                </form>
            </>
    )
}
export default Login;