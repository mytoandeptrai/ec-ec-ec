import { APPEND_TEXT, CLEAR_NAME, SET_NAME } from "./name.type";

const initialState = {
   text: "",
};

export const nameReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case SET_NAME:
         return {
            ...state,
            text: action.payload,
         };
      case APPEND_TEXT:
         return {
            ...state,
            text: `${state.text} ${action.payload}`,
         };
      case CLEAR_NAME:
         return {
            ...state,
            text: "",
         };
      default:
         return state;
   }
};
