import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../contexts/TodoProvider";
import { axiosInstance } from "../../api/axiosClient";

interface ITodoReducer {
   todoList: ITodo[];
   loading: boolean;
   page: number;
   limit: number;
   title: string;
}

interface IFetchToDoPayload {
   title: string;
   page: number;
   limit: number;
}

export const fetchTodoAPI = createAsyncThunk(
   "todoSlice/fetchTodoAPI",
   async (payload: IFetchToDoPayload, thunkAPI) => {
      const { limit, page, title } = payload;
      const { fulfillWithValue, rejectWithValue } = thunkAPI;

      try {
         const url = title
            ? `/todos?title=${title}`
            : `/todos?_page=${page}&_limit=${limit}`;

         const response: any = await axiosInstance.get(url);

         return response;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

const initialState: ITodoReducer = {
   todoList: [],
   loading: false,
   page: 1,
   limit: 10,
   title: "",
};

const todoSlice = createSlice({
   name: "todoSlice",
   initialState: initialState,
   reducers: {
      setTodo: (state, action: PayloadAction<ITodo[]>) => {
         state.todoList = action.payload;
      },
      setTodoLoading: (state, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
      },
      setPage: (state, action: PayloadAction<number>) => {
         state.page = action.payload;
      },
      setLimit: (state, action: PayloadAction<number>) => {
         state.limit = action.payload;
      },
      setTitle: (state, action: PayloadAction<string>) => {
         state.title = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchTodoAPI.pending, (state, action) => {
         state.loading = true;
      });
      builder.addCase(fetchTodoAPI.fulfilled, (state, action) => {
         state.loading = false;
         state.todoList = action.payload;
      });
      builder.addCase(fetchTodoAPI.rejected, (state, action) => {
         state.todoList = [];
         state.loading = false;
      });
   },
});

export const { setLimit, setPage, setTitle, setTodo, setTodoLoading } =
   todoSlice.actions;

export default todoSlice.reducer;
