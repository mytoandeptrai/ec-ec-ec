/** Redux thunk:
 *  Bản chất nó là 1 cái hàm trả về 1 cái hàm trong đó có sẵn dispatch
 */

import { axiosInstance } from "../api/axiosClient";
import { setIsLoadingProduct, setProducts } from "../store/cart/cart.action";
import { SET_LOADING } from "../store/cart/cart.type";
import { setTodo, setTodoLoading } from "../store/todo/todo.action";
import { SET_TODO, SET_TODO_LOADING } from "../store/todo/todo.type";

// export const example = (/** Nơi nhận các giá trị truyền vào */) => {
//    return (dispatch: any) => {};
// };

// const exampleThu2 = (name: string, age: number) => {
//    return async (dispatch: any) => {};
// };

// exampleThu2("Huy", 10);

export const fetchApi = (title: string, page: number, limit: number) => {
   return async (dispatch: any) => {
      try {
         /** Cách 2 loading */
         //  const objectLoading = {
         //     type: SET_TODO_LOADING,
         //     payload: true,
         //  };
         //  dispatch(objectLoading);

         const url = title
            ? `/todos?title=${title}`
            : `/todos?_page=${page}&_limit=${limit}`;

         const response: any = await axiosInstance.get(url);

         /** Cách 1 */
         // dispatch(setTodo(response));

         /** Cách 2 */
         //  const object = {
         //     type: SET_TODO,
         //     payload: response,
         //  };
         //  dispatch(object);
         /** ================= */

         /** Cách 1 loading */
         dispatch(setTodoLoading(false));
      } catch (error) {
         dispatch(setTodo([]));
         /** Cách 1 loading */
         dispatch(setTodoLoading(false));
      }
   };
};

export const fetchProductAPI = () => {
   return async (dispatch: any) => {
      try {
         dispatch({
            type: SET_LOADING,
            payload: true,
         });
         /** https://jsonplaceholder.typicode.comhttps://dummyjson.com/products */
         const res: any = await axiosInstance.get(
            "https://dummyjson.com/products",
            {
               baseURL: "/",
            }
         );
         dispatch(setProducts(res.products));
      } catch (error) {}
   };
};
