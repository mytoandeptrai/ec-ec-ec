/**
 * Đầu tiên để khởi tạo 1 slice, mình sẽ dùng hàm createSlice({})
 * Nhận vào là 1 object gồm các thuộc tính:
 * name: tên của slice => redux toolkit phân biệt giữa những slice với nhau.
 * initialState: giá trị ban đầu của slice
 * reducers: object gì một hàm tên reducer mà mình muốn gọi khi trigger action
 * extra reducer: object và dùng khi sử dụng createAsyncThunk gọi API với redux toolkit
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
   count: 0,
   isLoading: false,
   data: [],
};

const counterSlice = createSlice({
   name: "counterSlice",
   initialState: initialState,
   reducers: {
      increase: (state, action: PayloadAction<number>) => {
         console.log("🚀 ~ action:", action.payload);
         state.count = state.count + action.payload;
      },
      decrease: (state, action) => {
         state.count = state.count - action.payload;
      },
   },
});

/** Sau khi tạo slice xong, mình cần export các function trong reducers để sử dụng:
 *  Cách viết sẽ là sử dụng destructuring lấy ra từ counterSlice.actions
 */

export const { decrease, increase } = counterSlice.actions;

/** Sau đó mình sẽ phải export reducer của counterSlice ra
 * Bằng việc sử dụng counterSlice.reducer
 */

export default counterSlice.reducer;
