import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = <P extends object>(
   Component: React.ComponentType<P>
): React.FC<P> => {
   return (props: P) => {
      /** Đây là nơi viết điều kiện */
      const isAuthenticated = localStorage.getItem("authToken");
      console.log("🚀 ~ return ~ isAuthenticated:", isAuthenticated);

      if (!isAuthenticated) {
         return <Navigate to="/register" />;
      }

      return <Component {...props} />;
   };
};

export default WithAuth;
