import React from "react";
import { axiosInstance } from "../api/axiosClient";

const TodoAction = () => {
   const onCreate = async () => {
      /** /posts */
      const body = {
         title: "foo",
         body: "bar",
         user: 1,
      };
      try {
         await axiosInstance.post("/posts", body);
      } catch (error) {
         console.log("🚀 ~ onCreate ~ error:", error);
      }
   };

   const onUpdate = async () => {
      const body = {
         id: 1,
         title: "foo",
         body: "bar",
         userId: 1,
      };
      try {
         await axiosInstance.put(`/posts/${body.id}`, body);
      } catch (error) {
         console.log("🚀 ~ onUpdate ~ error:", error);
      }
   };

   const onDelete = async () => {
      const body = {
         id: 1,
         title: "foo",
         body: "bar",
         userId: 1,
      };
      try {
         await axiosInstance.delete(`/posts/${body.id}`);
      } catch (error) {}
   };

   return (
      <div className="todo-action">
         <button onClick={onCreate}>Thêm</button>
         <button onClick={onUpdate}>Sửa</button>
         <button onClick={onDelete}>Xoá</button>
      </div>
   );
};

export default TodoAction;
