import { useState } from "react";

export const useLoggedIn = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const onChangeIsLoggedIn = () => {
      setIsLoggedIn(!isLoggedIn);
   };

   return {
      isLoggedIn,
      onChangeIsLoggedIn,
   };
};
