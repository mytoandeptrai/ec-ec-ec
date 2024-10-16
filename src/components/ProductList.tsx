import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cart.action";

export interface IProduct {
   id: number;
   name: string;
   price: number;
}

const products = [
   { id: 1, name: "Sản phẩm 1", price: 100000 },
   { id: 2, name: "Sản phẩm 2", price: 150000 },
   { id: 3, name: "Sản phẩm 3", price: 200000 },
   { id: 4, name: "Sản phẩm 4", price: 250000 },
];

const ProductList = () => {
   const dispatch = useDispatch();

   const onAddToCart = (product: IProduct) => {
      dispatch(addToCart(product));
   };

   return (
      <div className="products">
         <h2>Danh sách sản phẩm</h2>
         {products.map((product) => (
            <div
               key={product.id}
               className="product-item"
            >
               <span>
                  {product.name} - {product.price.toLocaleString()} VND
               </span>
               <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
         ))}
      </div>
   );
};

export default ProductList;
