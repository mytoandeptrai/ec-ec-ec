import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store-toolkit/store";
import { setLimit, setPage } from "../store-toolkit/slices/todoSlice";

const Pagination = () => {
   const page = useSelector((state: RootState) => state.todoState.page);
   const limit = useSelector((state: RootState) => state.todoState.limit);
   const dispatch = useDispatch();

   const onNext = () => {
      const newPage = page + 1;
      dispatch(setPage(newPage));
   };

   const onPrev = () => {
      const newPage = page - 1;
      if (newPage <= 0) return;
      dispatch(setPage(newPage));
   };

   const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      dispatch(setLimit(Number(value)));
   };

   return (
      <div className="pagination-container">
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
            onClick={onPrev}
            disabled={page === 1} // Disable prev button if on the first page
         >
            Prev
         </button>
         <button onClick={onNext}>Next</button>
      </div>
   );
};

export default Pagination;
