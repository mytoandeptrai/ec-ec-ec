import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store-toolkit/store";
import { decrease, increase } from "../store-toolkit/slices/counterSlice";
import { fetchCartProductsAPI } from "../store-toolkit/slices/cartSlice";

/** Lấy giá trị trong redux: Sử dụng hook tên là useSelector(callback)
 *  trong đó : callback là một hàm nhận vào state và trả ra giá trị reducer của mình
 *  Ví dụ: useSelector((state) => {
 *      return state.counterState.count;
 *  })
 */

/** Để gởi data lên reducer có 2 cách:
 * Lưu ý: sử dụng hook useDispatch của redux
 * Cách 1: tạo action trước sau đó gọi hàm với dispatch
 * Cách 2: tạo object gồm type và payload, sau đó gọi object với dispatch
 */

const Counter = () => {
   const dispatch = useDispatch();
   const count = useSelector((state: RootState) => {
      return state.counterState.count;
   });

   const onIncrease = () => {
      dispatch(increase(20));
   };

   const onDecrease = () => {
      dispatch(decrease(1));
   };

   return (
      <div>
         <p>{count}</p>
         <button onClick={onIncrease}>Increase</button>
         <button onClick={onDecrease}>Decrease</button>
      </div>
   );
};

export default Counter;
