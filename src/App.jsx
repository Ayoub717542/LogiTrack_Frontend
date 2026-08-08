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
}

export default App;