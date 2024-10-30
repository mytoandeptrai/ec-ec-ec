// RegisterPage.js
import React from "react";

const RegisterPage = () => {
   const onSubmit = (e: any) => {
      e.preventDefault();
      /** sau khi request API */
      const response = {
         id: 1234,
         name: "SON",
         email: "son@example.com",
         isAdmin: false,
      };

      localStorage.setItem("user", JSON.stringify(response));
   };
   return (
      <div className="register-page">
         <h1>Register</h1>
         <form
            className="register-form"
            onSubmit={onSubmit}
         >
            <input
               type="text"
               placeholder="Username"
            />
            <input
               type="email"
               placeholder="Email"
            />
            <input
               type="password"
               placeholder="Password"
            />
            <button type="submit">Register</button>
         </form>
      </div>
   );
};

export default RegisterPage;
