import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
   decreaseQuality,
   increaseQuality,
   removeFromCart,
} from "../store/cart/cart.action";
import { ICartItems } from "../store/cart/cart.reducer";

const total = (cartItems: ICartItems[]) => {
   /** Cách dùng vòng for */
   let result = 0;

   for (let index = 0; index < cartItems.length; index++) {
      const cart = cartItems[index];
      const money = cart.quality * cart.price;
      result = result + money;
   }

   //  return result;

   /** Cách 2: Sử dụng reduce */
   const resultWithReduce = cartItems.reduce((result, cart) => {
      const money = cart.quality * cart.price;
      result = result + money;
      return result;
   }, 0);
   return resultWithReduce;
};

const CartList = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector((state: RootState) => {
      return state.cartState.cartItems;
   });

   const onRemoveCart = (id: number) => {
      dispatch(removeFromCart(id));
   };

   const onIncreaseCart = (id: number) => {
      dispatch(increaseQuality(id));
   };

   const onDecreaseCart = (id: number) => {
      dispatch(decreaseQuality(id));
   };

   return (
      <div className="cart">
         <h2>Giỏ hàng - Tổng tiền: {total(cartItems).toLocaleString()} VND</h2>
         {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
               <div
                  key={index}
                  className="cart-item"
               >
                  <span>
                     {item.title} - {item.price.toLocaleString()} VND
                  </span>

                  <div className="quantity-controls">
                     <button onClick={() => onDecreaseCart(item.id)}>-</button>
                     <span>{item.quality}</span>
                     <button onClick={() => onIncreaseCart(item.id)}>+</button>
                  </div>

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
