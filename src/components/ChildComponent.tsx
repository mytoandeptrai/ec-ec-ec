import React, { memo, useState } from "react";

interface IChildComponentProps {
   count: number;
   value?: any;
   handleToggle?: () => void;
}

const ChildComponent = (props: IChildComponentProps) => {
   console.log("re-rendering child component", props.count);

   const [showShow, setShowShow] = useState(false);

   return (
      <div>
         ChildComponent
         {/* <button onClick={() => setShowShow(!showShow)}>Toggle</button> */}
      </div>
   );
};
/** Khi bỌc memo ở đây, thì child component chỉ re-render khi props của nó thay đổi hoặc state của chính nó thay đổi */
export default memo(ChildComponent);
