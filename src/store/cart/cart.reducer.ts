import { IProduct } from "../../components/ProductList";
import { ADD_TO_CART, CHANGE_STATUS, REMOVE_FROM_CART } from "./cart.type";

interface IInitialState {
   cartItems: IProduct[];
   isLoggedIn: boolean;
}

const initialState: IInitialState = {
   cartItems: [],
   isLoggedIn: false,
};

export const cartReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case ADD_TO_CART:
         const cloneCartItems = [...state.cartItems];

         const existedCart = cloneCartItems.find((cart) => {
            return cart.id === action.payload.id;
         });

         if (!existedCart) {
            cloneCartItems.push(action.payload);
         }

         return {
            ...state,
            cartItems: cloneCartItems,
            // cartItems: [...state.cartItems, action.payload],
         };
      case REMOVE_FROM_CART:
         const _cartItems = [...state.cartItems];
         const newCartItems = _cartItems.filter((cart) => {
            return cart.id !== action.payload;
         });

         return {
            ...state,
            cartItems: newCartItems,
         };
      case CHANGE_STATUS:
         return {
            ...state,
            isLoggedIn: action.payload,
         };
      default:
         return state;
   }
};
