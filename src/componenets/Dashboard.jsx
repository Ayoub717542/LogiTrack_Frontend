
import { Navigate, useNavigate } from "react-router-dom";
function Dashboard(){
      const navigate = useNavigate()

  function Logout(){
    localStorage.clear();
    navigate("/login", { replace: true });
  }

    return( <>
        <p>hello world</p>

    
     <button className="logout-btn" onClick={Logout} >
          Logout
        </button>
    
    </>
    

    )
}
export default Dashboard;