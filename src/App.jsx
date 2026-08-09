<<<<<<< HEAD

import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./security/ProtectedRoute";
import Login from "./pages/Login"
import Register from "./pages/Register";

function App() {
    return (
        <Routes>

            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>

            {/* Everything inside this route requires authentication */}
            <Route element={<ProtectedRoute />}>

                {/* Feature routes will be added later */}

            </Route>

        </Routes>
    );
}

export default App;
=======
>>>>>>> dashboard
