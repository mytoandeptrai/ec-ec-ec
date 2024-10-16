import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeStatus } from "../store/cart/cart.action";

const Status = () => {
   const isLoggedIn = useSelector((state: RootState) => {
      return state.cartState.isLoggedIn;
   });
   const dispatch = useDispatch();

   const onChangeStatus = () => {
      dispatch(changeStatus(!isLoggedIn));
   };

   return (
      <div className="status-container">
         <h1>Status: {isLoggedIn ? "Đã Đăng Nhập" : "Chưa Đăng Nhập"}</h1>
         <button onClick={onChangeStatus}>Chuyển Trạng Thái</button>
      </div>
   );
};

export default Status;
