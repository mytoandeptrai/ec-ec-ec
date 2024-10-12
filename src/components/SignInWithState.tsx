import React, { useState } from "react";

const SignInWithState = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorUserName, setErrorUserName] = useState("");

   const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
      if (e.target.value.length < 6) {
         setErrorUserName("Vui lòng nhập đủ 6 ký tự");
      } else {
         setErrorUserName("");
      }
   };

   const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
   };

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const values = {
         username,
         password,
      };
      console.log("🚀 ~ onSubmit ~ values:", values);
   };

   return (
      <div>
         <h1>Đăng nhập với State</h1>
         <form
            onSubmit={onSubmit}
            style={{
               width: "300px",
               display: "flex",
               flexDirection: "column",
               gap: "5px",
               marginBottom: "100px",
            }}
         >
            <label htmlFor="username">Username</label>
            <input
               name="username"
               value={username}
               onChange={onUserNameChange}
            />
            {errorUserName && (
               <p style={{ color: "red", margin: 0, padding: 0 }}>
                  {errorUserName}
               </p>
            )}
            <label htmlFor="password">Password</label>
            <input
               name="password"
               value={password}
               onChange={onPasswordChange}
            />
            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default SignInWithState;
