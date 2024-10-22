import React, { useState } from "react";
import { useLoggedIn } from "../hooks/useLoggedIn";



const DashboardPage = () => {
   return (
      <div className="dashboard-container">
         <h1>Dashboard</h1>
         <div className="dashboard-content">
            <div className="card">
               <h2>Overview</h2>
               <p>Quick stats of your activities</p>
            </div>
            <div className="card">
               <h2>Reports</h2>
               <p>View your recent reports</p>
            </div>
            <div className="card">
               <h2>Settings</h2>
               <p>Configure your preferences</p>
            </div>
         </div>
      </div>
   );
};

export default DashboardPage;
