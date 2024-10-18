import "./App.css";

import { useState } from "react";
import "./App-test.css";
import Counter from "./components/Counter";
import Ecommerce from "./components/Ecommerce";
import TodoList from "./components/TodoList";
import RouteMainApp from "./routes/RouteMainApp";

function App() {
   const [example, setExample] = useState("hello word!");
   const [isFlag, setIsFlag] = useState(true);

   /**
    * B1: import useEffect từ react;
    * B2: Khởi tạo useEffect bằng cú phát: useEffect(callback, dependencies);
    * => callback là 1 arrow function
    * + callback: Hàm để thực thi mounting, updating và un-mounting ;
    * + dependencies: Gồm 3 cái :
    * * [] => useEffect chỉ chạy 1 lần sau lần render đầu tiên
    * * [state] => useEffect luông chạy sau khi thay đổi state => dùng khi phân trang, tìm kiếm, ...
    * * Ko truyền dependencies: useEffect này luôn luôn chạy khi component render
    */

   /** truyền dependencies là mảng rỗng */
   // useEffect(() => {
   //    /** Đay là nơi mounting */
   //    console.log("effect run ");
   //    setTimeout(() => {
   //       setExample(`hello world! ${Math.random()}`);
   //    }, 3000);

   //    return () => {
   //       /** Đây là unmounting */
   //    };
   // }, []);

   // /** truyền dependencies là mảng gồm các state */
   // useEffect(() => {
   //    /** Đay là nơi mounting + updating */
   //    console.log("useEffect run 1234");
   //    return () => {
   //       /** Đây là unmounting */
   //    };
   // }, [example]);

   // /** Ko truyền dependencies */
   // useEffect(() => {
   //    /** Đay là nơi mounting + updating */

   //    return () => {
   //       /** Đây là unmounting */
   //    };
   // });

   return (
      <div>
         <RouteMainApp />
      </div>
   );
}

export default App;
