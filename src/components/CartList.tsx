import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeFromCart } from "../store/cart/cart.action";

const CartList = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector((state: RootState) => {
      return state.cartState.cartItems;
   });

   const onRemoveCart = (id: number) => {
      dispatch(removeFromCart(id));
   };

   return (
      <div className="cart">
         <h2>Giỏ hàng</h2>
         {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
               <div
                  key={index}
                  className="cart-item"
               >
                  <span>
                     {item.name} - {item.price.toLocaleString()} VND
                  </span>
                  <button onClick={() => onRemoveCart(item.id)}>
                     Xoá sản phẩm
                  </button>
               </div>
            ))
         ) : (
            <p>Giỏ hàng trống</p>
         )}
      </div>
   );
};

export default CartList;
