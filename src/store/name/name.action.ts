import { APPEND_TEXT, CLEAR_NAME, SET_NAME } from "./name.type";

export const setName = (payload: string) => ({
   type: SET_NAME,
   payload,
});

export const appendText = (payload: string) => ({
   type: APPEND_TEXT,
   payload,
});

export const clearText = () => ({
   type: CLEAR_NAME,
});
