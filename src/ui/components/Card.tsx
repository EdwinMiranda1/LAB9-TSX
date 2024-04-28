import React, { useEffect, useState } from "react";
import './Card.css'

interface Product {
    title: string;
    description: string;
    price: number;
}

export const Card: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const randomProductId = Math.floor(Math.random() * 100) + 1; 
                const response = await fetch(`https://dummyjson.com/products/${randomProductId}`); 
                if (!response.ok) {
                    throw new Error("Error al obtener los datos del producto");
                }
                const data: Product = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="card-container">
            {product && (
                <>
                <h2 className="card-title">Producto Aleatorio</h2>
                    <div className="card-producto">
                         <p className="title-product">Producto</p>
                        <p className="card-product"> {product.title}</p>
                    </div>
                    <div className="descripcion">
                        <p className="title-descrption">Descripcion</p>
                        <p className="card-descrip"> {product.description}</p>
                    </div>
                <p className="card-price">USD$: {product.price}</p>
                </>
            )}
        </div>
    );
};

export default Card;

