import axios, { InternalAxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com",
   timeout: 5000,
});

/** set up baseUrl:
 *  backend url: https://jsonplaceholder.typicode.com;
 *
 *  Nếu gọi request với url là user => axios.get("https://jsonplaceholder.typicode.com/user")
 *  Nếu gọi request với url là product => axios.get("https://jsonplaceholder.typicode.com/product")
 *  Nếu gọi request với url là cart => axios.get("https://jsonplaceholder.typicode.com/cart")
 *
 *  baseURL => dùng để làm ngắn đi url mà gởi lên axios;
 *  mình sẽ set up baseUrl : https://jsonplaceholder.typicode.com
 *
 *  Nếu gọi request với url là user => axios.get("/user")
 *  Nếu gọi request với url là product => axios.get("/product")
 *  Nếu gọi request với url là cart => axios.get("/cart")
 *
 */

// Thêm một bộ đón chặn request
axiosInstance.interceptors.request.use(
   function (config) {
      // Làm gì đó trước khi request dược gửi đi

      const request: any = {
         ...config,
         headers: {
            ...config.headers,
            "ABCDEFG-KEY": "12345",
            "Token": "lorem10"
         },
      };

      return request;
   },
   function (error) {
      // Làm gì đó với lỗi request
      return Promise.reject(error);
   }
);

// Thêm một bộ đón chặn response
axiosInstance.interceptors.response.use(
   function (response) {
      // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
      // Làm gì đó với dữ liệu response
      return response.data;
   },
   function (error) {
      // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
      // Làm gì đó với lỗi response
      return Promise.reject(error);
   }
);
