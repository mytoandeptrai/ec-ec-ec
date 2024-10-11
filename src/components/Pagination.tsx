import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoProvider";

const Pagination = () => {
   const todoContext = useContext(TodoContext);
   const { page, onPageChange, onLimitChange, limit } = todoContext;

    const onNext = () => {
      const newPage = page + 1;
      onPageChange(newPage);
   };

   const onPrev = () => {
      const newPage = page - 1;
      if (newPage <= 0) return;
      onPageChange(newPage);
   };

   const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      onLimitChange(Number(value));
   };

   return (
      <div>
         <select
            value={limit}
            onChange={onSelectChange}
         >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
         </select>

         <button
            style={{ marginLeft: "10px" }}
            onClick={onPrev}
         >
            Prev
         </button>
         <button
            onClick={onNext}
            style={{ marginLeft: "10px" }}
         >
            Next
         </button>
      </div>
   );
};

export default Pagination;
