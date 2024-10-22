// HomePage.js
import { useCallback, useMemo, useState } from "react";
import ChildComponent from "../components/ChildComponent";
import WithAuth from "../hocs/WithAuth";

/**
 * memo: được sử dụng để ngăn chặn việc re-render ở component con khi component cha bị re-render
 * Cách dùng : memo(Gắn component của mình vào đây)
 *
 * useMemo: sử dụng để ngăn chặn việc re-render ở component con
 * khi chúng ta truyền xuống là một object hoặc array.
 * Cách dùng: mình sẽ tạo biến và gán nó bằng useMemo
 * Trong useMemo cú pháp nó sẽ là:
 * useMemo(callback, dependencies)
 *
 * => callback: sẽ là hàm thực thi
 * => dependencies: Giống như bên useEffect, khi nào dependency thay
 * đổi thì useMemo mới được tính toán lại
 *
 * useCallback: sử dụng để ngăn chặn việc re-render ở component con
 * khi chúng ta truyền xuống là một object hoặc array.
 * Cách dùng: mình sẽ tạo biến và gán nó bằng useCallback
 * Trong useCallback cú pháp nó sẽ là:
 * useCallback(callback, dependencies)
 *
 * => callback: sẽ là hàm thực thi
 * => dependencies: Giống như bên useEffect, khi nào dependency thay
 * đổi thì useCallback mới được tính toán lại
 *
 * Luư ý:
 * + useMemo sử dụng để ghi nhớ kết quả trả về của 1 hàm => hàm có return thì mình mới dùng
 * + useCallback sử dụng để ghi nhớ 1 hàm => hàm ko return
 * + memo: sử dụng để bọc component lại tránh re-render. Phải kết hợp 3 cái useCallback, useMemo và memo mới có hiệu quả
 * => Có nghĩa là khi nào dùng memo thì parent component phải dùng useMemo và useCallback
 *
 * Khi mà component phức tạp như là vẽ chart, animation => mình mới dùng 3 cái này, còn ko thì thôi
 *
 */

/** HOC: Một component nhận vào 1 component khác như là một tham số 
 * và sẽ trả về component đó / component khác dựa trên 1 số điều kiện nhất định.
 *  
 * Khi nào dùng : Khi mình muốn chia sẽ logic giữa những component với nhau
 * Ví dụ cụ thể: Khi làm tính năng đăng nhập và vào trang 
 * => Viết 1 cái HOC để kiểm tra người dùng đã đăng nhập hay chưa, nếu chưa thì mình sẽ chuyển về login còn nếu có rồi thì ở lại page đó
   cách sử dụng HOC thì giống như memo
*/

const HomePage = () => {
   const [count, setCount] = useState(0);
   const [isShow, setIsShow] = useState(false);

   const onClick = () => {
      setCount(count + 1);
   };

   const value = useMemo(() => {
      return [];
   }, []);

   const handleToggle = useCallback(() => {}, []);

   return (
      <div className="home-page">
         <button onClick={onClick}>Click</button>
         <button onClick={() => setIsShow(!isShow)}>Toggle</button>
         <ChildComponent
            count={count}
            value={value}
            handleToggle={handleToggle}
         />
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

export default WithAuth(HomePage);
