// NotFoundPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoggedIn } from "../hooks/useLoggedIn";

const NotFoundPage = () => {
   const { isLoggedIn, onChangeIsLoggedIn } = useLoggedIn();
   return (
      <div className="not-found-container">
         <h1>404</h1>
         <p>Oops! The page you're looking for doesn't exist.</p>
         <Link
            to="/"
            className="back-home-button"
         >
            Go Back Home
         </Link>
      </div>
   );
};

export default NotFoundPage;
