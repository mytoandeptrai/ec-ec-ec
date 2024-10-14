import { DECREASE_COUNTER, INCREASE_COUNTER } from "./counter.type";

/** Actions sẽ là một object nhận vào payload gồm data muốn gởi lên reducer;
 *  Trong đó gồm type là 1 string, và payload là 1 object hoặc number hoặt string;
 *  Vì để tương tác giữa UI và reducer, ta cần dùng action kết hợp với dispatch;
 */

export const increase = (payload: number) => ({
   type: INCREASE_COUNTER,
   payload,
});

export const decrease = (payload: number) => ({
   type: DECREASE_COUNTER,
   payload,
});
