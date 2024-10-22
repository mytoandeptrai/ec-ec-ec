import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoProvider from "./contexts/TodoProvider";
import { Provider } from "react-redux";
import { store } from "./store-toolkit/store";
import { BrowserRouter } from "react-router-dom";
import ExampleProvider from "./contexts/ExampleProvider";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <TodoProvider>
            <ExampleProvider>
               <App />
            </ExampleProvider>
         </TodoProvider>
      </Provider>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
