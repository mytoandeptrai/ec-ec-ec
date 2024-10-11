import React from "react";
import { useState } from "react";
const Bai1 = () => {
   const [counter, setCounter] = useState(0);

   const onClick = () => {
      setCounter(counter + 1);
   };

   return (
      <div>
         <p>Bai1</p>
         <p>{counter}</p>
         <button onClick={onClick}>Tăng</button>
      </div>
   );
};

export default Bai1;
