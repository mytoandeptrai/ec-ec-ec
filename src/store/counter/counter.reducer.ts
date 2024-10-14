import { DECREASE_COUNTER, INCREASE_COUNTER } from "./counter.type";

/**
 * Các bước để tạo 1 reducer:
 * B1: Tạo initial state là một object chứa các data mà mình muốn lưu.
 * B2: Tạo một hàm tên reducer mà mình muốn nhận vào state và action, trong đó state = initialState tạo ở trên
 * và action là những action mình muốn trigger tới reducer này.
 * B3: Tạo reducer => dùng 1 switch case mà mình muốn gọi khi trigger 1 action
 * B4: Các case ở trong switch tương ứng với 1 type, default là khi user gởi action với type ko tồn tại trong reducer.
 * B5: Trong action gồm 2 cái, type và payload. Ở đó type chính là mình định nghĩa ở counter.type, payload là dữ liệu.
 */

const initialState = {
   count: 0,
   isLoading: false,
   data: [],
};

export const counterReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case INCREASE_COUNTER /** if (action.type === INCREASE_COUNTER) */:
         const newValue = {
            ...state,
            count: state.count + action.payload,
         };

         return newValue;
      case DECREASE_COUNTER:
         return {
            ...state,
            count: state.count - 1,
         };
      default:
         return state;
   }
};
