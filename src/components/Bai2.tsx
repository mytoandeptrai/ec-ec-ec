import React, { useState } from "react";

const Bai2 = () => {
   const [counter, setCounter] = useState(0);

   const onTangClick = () => {
      setCounter(counter + 1);
   };

   const onGiamClick = () => {
      setCounter(counter - 1);
   };

   return (
      <div>
         <p>Bai2</p>
         <p>{counter}</p>
         <button onClick={onTangClick}>Tăng</button>
         <button onClick={onGiamClick}>Giảm</button>
      </div>
   );
};

export default Bai2;
