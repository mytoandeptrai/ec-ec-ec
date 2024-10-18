import {
   ADD_TO_CART,
   CHANGE_STATUS,
   DECREASE_QUALITY,
   INCREASE_QUALITY,
   REMOVE_FROM_CART,
   SET_LOADING,
   SET_PRODUCTS,
} from "./cart.type";

export interface ICartItems {
   id: number;
   title: string;
   price: number;
   quality: number;
}

interface IInitialState {
   cartItems: ICartItems[];
   isLoggedIn: boolean;
   products: ICartItems[];
   isLoadingProduct: boolean;
}

const initialState: IInitialState = {
   cartItems: [],
   isLoggedIn: false,
   products: [],
   isLoadingProduct: false,
};

export const cartReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case SET_PRODUCTS:
         return {
            ...state,
            products: action.payload,
            isLoadingProduct: false,
         };
      case SET_LOADING:
         return {
            ...state,
            isLoadingProduct: action.payload,
         };
      case ADD_TO_CART:
         const cloneCartItems = [...state.cartItems];

         const existedCart = cloneCartItems.find((cart) => {
            return cart.id === action.payload.id;
         });

         /** Kiểm tra nếu chưa có thì set quality bằng 1 */
         if (!existedCart) {
            const newCart = {
               ...action.payload,
               quality: 1,
            };
            cloneCartItems.push(newCart);
         } else {
            /** Nếu đã có rồi thì mình sẽ tăng quality của sản phẩm hiện tại (exitedCart) */
            existedCart.quality += 1;
            /** Tìm vị trí của sản phẩm hiện tại trong mảng to (cloneCartItems) */
            const index = cloneCartItems.findIndex(
               (cart) => cart.id === action.payload.id
            );
            /** Sau khi có rồi thì mình sẽ replace vị trí index đó với sản phẩm vừa được update */
            cloneCartItems[index] = existedCart;
         }

         /**
          * array = [1,2,3,4,5,6,7,8,9]
          *
          * => Replace : 4 -> 10
          * index của số 4: 3
          * array[3] = 10; => [1,2,3,10,5,6,7,8,9]
          */

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
      case INCREASE_QUALITY:
         /** Clone mảng cart ban đầu ra */
         const _cartItemsIncrease = [...state.cartItems];

         /** Tìm vị trí của cart nằm trong mảng đó */
         const cartIndex = _cartItemsIncrease.findIndex((cart) => {
            return cart.id === action.payload;
         });

         /** Update vị trí của cart với quality mới */
         _cartItemsIncrease[cartIndex].quality += 1;

         return {
            ...state,
            cartItems: _cartItemsIncrease,
         };
      case DECREASE_QUALITY:
         /** Clone mảng cart ban đầu ra */
         const _cartItemsDecrease = [...state.cartItems];

         /** Tìm vị trí của cart nằm trong mảng đó */
         const cartDecreaseIndex = _cartItemsDecrease.findIndex((cart) => {
            return cart.id === action.payload;
         });

         /** Update vị trí của cart với quality mới */
         const currentCart = _cartItemsDecrease[cartDecreaseIndex];

         /** Kiểm tra số lượng cart phải lớn hơn 1 thì mới cho trừ */
         if (currentCart.quality > 1) {
            _cartItemsDecrease[cartDecreaseIndex].quality -= 1;
         }

         return {
            ...state,
            cartItems: _cartItemsDecrease,
         };
      default:
         return state;
   }
};
