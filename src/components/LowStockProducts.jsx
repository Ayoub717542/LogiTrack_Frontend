function LowStockProducts({lowStockProducts}) {
    return (
        <div className="low-stock-products">

            <h2>Low Stock Products</h2>

            {lowStockProducts && lowStockProducts.length > 0 ? (
                lowStockProducts.map((product) => (
                    <div className="low-stock-item" key={product.id}>
                        <span>{product.name}</span>
                        <span>
                            {product.stock} left
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