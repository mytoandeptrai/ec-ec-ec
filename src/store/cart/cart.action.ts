import {
   ADD_TO_CART,
   CHANGE_STATUS,
   DECREASE_QUALITY,
   INCREASE_QUALITY,
   REMOVE_FROM_CART,
} from "./cart.type";

interface IAddToCart {
   id: number;
   name: string;
   price: number;
}

export const changeStatus = (payload: boolean) => ({
   type: CHANGE_STATUS,
   payload,
});

export const addToCart = (payload: IAddToCart) => ({
   type: ADD_TO_CART,
   payload,
});

export const removeFromCart = (payload: number) => ({
   type: REMOVE_FROM_CART,
   payload,
});

export const increaseQuality = (payload: number) => ({
   type: INCREASE_QUALITY,
   payload,
});

export const decreaseQuality = (payload: number) => ({
   type: DECREASE_QUALITY,
   payload,
});
