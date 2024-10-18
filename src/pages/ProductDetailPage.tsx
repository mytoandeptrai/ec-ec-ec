// ProductDetailPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
   /** Cái hook để lấy param từ dynamic route
    * Lưu ý: bên <Route /> có cái path dynamic như thế nào thì mình lấy y như thế:
    * Ví dụ: path="/product/:id", => const id = params?.id;
    * Ví dụ: path="/product/:slug", => const id = params?.slug;
    * Dùng để làm các trang chi tiết sản phẩm / sân bóng
    * Cách để làm trang này thì mình sẽ sử dụng useEffect kết hợp với id lấy từ params để gọi API
    */
   const params = useParams();
   const id = params?.id;
   const product = {
      id: 1,
      title: "Awesome Product",
      description: "This is a great product that you will absolutely love!",
      price: "$99.99",
      imageUrl: "https://via.placeholder.com/400x400",
   };

   useEffect(() => {
      if (id) {
         /** Gọi API chỗ nì */
      }
   }, [id]);

   return (
      <div className="product-detail-container">
         <div className="product-image">
            <img
               src={product.imageUrl}
               alt={product.title}
            />
         </div>
         <div className="product-info">
            <h1>{product.title}</h1>
            <p>ID Product{id}</p>
            <p>{product.description}</p>
            <span className="product-price">{product.price}</span>
            <button className="add-to-cart-button">Add to Cart</button>
         </div>
      </div>
   );
};

export default ProductDetailPage;
