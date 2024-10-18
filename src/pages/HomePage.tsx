// HomePage.js
import React from "react";

const HomePage = () => {
   return (
      <div className="home-page">
         <div className="home-banner">
            <h1>Welcome to Our Shop</h1>
            <p>Find the best products here!</p>
         </div>
         <div className="home-content">
            <div className="feature-box">
               <h2>Quality Products</h2>
               <p>Only the best for you</p>
            </div>
            <div className="feature-box">
               <h2>Fast Delivery</h2>
               <p>Get your products fast and on time</p>
            </div>
            <div className="feature-box">
               <h2>Customer Support</h2>
               <p>We're here to help 24/7</p>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
