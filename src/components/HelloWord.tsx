import React, { useEffect } from "react";
import SayGoodBye from "./SayGoodBye";

interface IHelloWordProps {
   username: string;
   person: {
      name: string;
      age: number;
   };
   array: string[];
}

const HelloWord = (props: IHelloWordProps) => {
   useEffect(() => {
      return () => {
         console.log("====================================");
         console.log("unmount Hello World!");
         console.log("====================================");
      };
   }, []);

   const { username, array, person } = props;
   return (
      <div>
         <p>{username}</p>
      </div>
   );
};

export default HelloWord;
