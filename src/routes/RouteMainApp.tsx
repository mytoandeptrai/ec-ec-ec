import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";
import RegisterPage from "../pages/RegisterPage";
import Navbar from "../components/Navbar";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailPage from "../pages/ProductDetailPage";

/**
 * Cấu hình route cho React;
 *
 * B1: import Routes từ react router dom để bọc các element bên trong
 * B2: import Route để bọc từng cái page một
 * trong đó Route sẽ nhận vào 2 cái : path , element
 * path => đường dẫn trên url
 * element => page
 */
const RouteMainApp = () => {
   return (
      <>
         <Navbar />
         <Routes>
            <Route
               index
               path="/"
               element={<HomePage />}
            />
            {/* Tạo thêm các route cho các page khác */}
            <Route
               path="/dashboard"
               element={<DashboardPage />}
            />
            <Route
               path="/product"
               element={<ProductPage />}
            />
            <Route
               path="/register"
               element={<RegisterPage />}
            />
            {/* Dynamic route thì mình sẽ sử dụng dấu : + tên ở cái path */}
            <Route
               path="/product/:id"
               element={<ProductDetailPage />}
            />
            <Route
               path="*"
               element={<NotFoundPage />}
            />
         </Routes>
      </>
   );
};

export default RouteMainApp;
