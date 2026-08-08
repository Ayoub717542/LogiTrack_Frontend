
import api from "./service/api"
import Login from "./pages/Login"
import Dashboard from "./componenets/Dashboard";
import Register from "./pages/Register";
import { Route, Routes  } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
     <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />}/>
    <Route path="/" element={<Dashboard />} />
   </Routes>
    <ToastContainer />
    </>
  
  )
}

export default App
