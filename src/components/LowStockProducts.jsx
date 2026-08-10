import "../styles/LowStockProducts.css"
import api from "../service/api";
import { use, useEffect ,useState} from "react";
function LowStockProducts() {

const [lowStockProducts, setLowStockProducts] = useState([]);

useEffect(() =>{
    api.get("/products/getLowStockProducts").then((res) => {
        setLowStockProducts(res.data);
    })
    .catch((error) =>{
        console.error(error)
    })
},[])

    return (
        <div className="low-stock-products">

            <h2>Low Stock Products</h2>

            {lowStockProducts && lowStockProducts.length > 0 ? (
                lowStockProducts.map((product) => (
                    <div className="low-stock-item" key={product.id}>
                        <span>{product.nom}</span>
                        <span>
                            {product.quantiteStock} left
                        </span>
                    </div>
                ))
            ) : (
                <p>No low stock products</p>
            )}

        </div>
    );
}
export default LowStockProducts;