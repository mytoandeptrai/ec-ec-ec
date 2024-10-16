import React from "react";
import ProductList from "./ProductList";
import CartList from "./CartList";
import Status from "./Status";

const Ecommerce = () => {
   return (
      <div>
         <Status />
         <div className="container">
            <ProductList />
            <CartList />
         </div>
      </div>
   );
};

export default Ecommerce;
