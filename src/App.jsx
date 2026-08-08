<<<<<<< HEAD
import Login from "./pages/Login"
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
   </Routes>
    <ToastContainer />
    </>
  
  )
=======
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./security/ProtectedRoute";

function App() {
    return (
        <Routes>

            {/* Public routes */}
            {/* Login and Register will be here */}

            {/* Everything inside this route requires authentication */}
            <Route element={<ProtectedRoute />}>

                {/* Feature routes will be added later */}

            </Route>

        </Routes>
    );
>>>>>>> security
}

export default App;