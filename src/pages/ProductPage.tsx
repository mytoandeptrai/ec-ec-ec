// ProductPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
   /** Hook này dùng để chuyển trang mà ko dùng thẻ link */
   const navigate = useNavigate();

   const onClickButton1 = () => {
      /** Để chuyển được trang bằng navigate thì mình sẽ sử dụng cú pháp:
       * navigate(path)
       * trong đó path này là string và path này sẽ phải trùng với path như bên <Route path="" /> của mình
       */
      navigate("/");
   };

   const onClickButton2 = () => {
      navigate("/dashboard");
   };

   const onClickButton3 = () => {
      navigate(-1);
   };

   return (
      <div className="product-page">
         <h1>Products</h1>
         <div className="product-list">
            <div className="product-card">
               <img
                  src="https://via.placeholder.com/150"
                  alt="Product"
               />
               <h2>Product 1</h2>
               <p>$100</p>
               <button onClick={onClickButton1}>Add to Cart</button>
            </div>
            <div className="product-card">
               <img
                  src="https://via.placeholder.com/150"
                  alt="Product"
               />
               <h2>Product 2</h2>
               <p>$200</p>
               <button onClick={onClickButton2}>Add to Cart</button>
            </div>
            <div className="product-card">
               <img
                  src="https://via.placeholder.com/150"
                  alt="Product"
               />
               <h2>Product 3</h2>
               <p>$300</p>
               <button onClick={onClickButton3}>Add to Cart</button>
            </div>
         </div>
      </div>
   );
};

export default ProductPage;
