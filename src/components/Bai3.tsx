import React, { useState } from "react";

const Bai3 = () => {
   const [toggle, setToggle] = useState("OFF");

   const onClick = () => {
      let newToggle = "ON";

      if (toggle === "ON") {
         newToggle = "OFF";
      } else {
         newToggle = "ON";
      }

      setToggle(newToggle);
   };

   return (
      <div>
         <p>Bai3</p>
         <p>{toggle}</p>
         <button onClick={onClick}>Click</button>
      </div>
   );
};

export default Bai3;
