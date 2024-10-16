import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { APPEND_TEXT, CLEAR_NAME, SET_NAME } from "../store/name/name.type";
import { setName } from "../store/name/name.action";

const Name = () => {
   const text = useSelector((state: RootState) => {
      return state.nameState.text;
   });

   const dispatch = useDispatch();

   const onSetName = () => {
      // dispatch({
      //    type: SET_NAME,
      //    payload: "John",
      // });
      dispatch(setName("John"));
   };

   const onClearName = () => {
      dispatch({
         type: CLEAR_NAME,
      });
   };

   const onAppendText = () => {
      dispatch({
         type: APPEND_TEXT,
         payload: "Doe",
      });
   };

   return (
      <div>
         <h1>Name: {text}</h1>
         <button onClick={onSetName}>Set Name</button>
         <button onClick={onClearName}>Clear Name</button>
         <button onClick={onAppendText}>Append Text</button>
      </div>
   );
};

export default Name;
