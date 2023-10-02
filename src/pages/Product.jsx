import { useState, useEffect } from "react";
import UseProductHook from "../hooks/useProductHooks";
import "./product.css";
const Product = () => {
    const { setProduct, fetchData, product, getBookData, isbn, setIsbn } = UseProductHook();
    useEffect(() => {
        fetchData();
    }, [])
    const handleUpdate = (isbn, e) => {
        e.preventDefault();
        getBookData(isbn);

    }

    return (
        <>
            <div className="product-grid">
                {product && product.map((item) => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Category: {item.category}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => handleUpdate(item.isbn)}>Edit</button>
                    </div>
                ))}
            </div>
        </>
    );


}
export default Product;