import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store-toolkit/store";
import { useEffect, useState } from "react";
import {
   addToCart,
   fetchCartProductsAPI,
} from "../store-toolkit/slices/cartSlice";

interface Dimensions {
   width: number;
   height: number;
   depth: number;
}

interface Review {
   rating: number;
   comment: string;
   date: string;
   reviewerName: string;
   reviewerEmail: string;
}

interface MetaData {
   createdAt: string;
   updatedAt: string;
   barcode: string;
   qrCode: string;
}

export interface IProduct {
   id: number;
   title: string;
   description: string;
   category: string;
   price: number;
   discountPercentage: number;
   rating: number;
   stock: number;
   tags: string[];
   brand: string;
   sku: string;
   weight: number;
   dimensions: Dimensions;
   warrantyInformation: string;
   shippingInformation: string;
   availabilityStatus: string;
   reviews: Review[];
   returnPolicy: string;
   minimumOrderQuantity: number;
   meta: MetaData;
   images: string[];
   thumbnail: string;
}

const ProductList = () => {
   const dispatch = useDispatch();
   const products: IProduct[] = useSelector(
      (state: RootState) => state.cartState.products
   );
   const isLoadingProduct = useSelector(
      (state: RootState) => state.cartState.isLoadingProduct
   );

   // State quản lý phân trang
   const [currentPage, setCurrentPage] = useState(1);
   const productsPerPage = 5; // Số sản phẩm mỗi trang

   // Tính toán để phân trang
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
   );

   // Điều hướng trang trước hoặc trang sau
   const handleNextPage = () => {
      if (currentPage < Math.ceil(products.length / productsPerPage)) {
         setCurrentPage(currentPage + 1);
      }
   };

   const handlePrevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   useEffect(() => {
      dispatch(fetchCartProductsAPI());
   }, [dispatch]);

   return (
      <div className="products">
         <h2>Danh sách sản phẩm</h2>
         {isLoadingProduct && <div className="spinner"></div>}
         {!isLoadingProduct && currentProducts.length > 0 ? (
            <>
               {currentProducts.map((product) => (
                  <div
                     key={product.id}
                     className="product-card fancy-card"
                  >
                     <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="product-image"
                     />
                     <div className="product-info">
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-description">
                           {product.description}
                        </p>
                        <p>
                           <strong>Brand:</strong> {product.brand}
                        </p>
                        <p className="product-price">
                           <strong>Price:</strong> ${product.price.toFixed(2)}
                           <span className="discount">
                              {" "}
                              (-{product.discountPercentage}%)
                           </span>
                        </p>
                        <p className="product-rating">
                           <strong>Rating:</strong> {product.rating} ⭐
                        </p>
                        <p>
                           <strong>Availability:</strong>{" "}
                           {product.availabilityStatus}
                        </p>
                        <button
                           onClick={() => dispatch(addToCart(product))}
                           className="add-to-cart-btn"
                        >
                           Add to Cart
                        </button>
                     </div>
                  </div>
               ))}
               {/* Phân trang */}
               <div className="pagination">
                  <button
                     onClick={handlePrevPage}
                     disabled={currentPage === 1}
                  >
                     Trang trước
                  </button>
                  <span>{currentPage}</span>
                  <button
                     onClick={handleNextPage}
                     disabled={
                        currentPage ===
                        Math.ceil(products.length / productsPerPage)
                     }
                  >
                     Trang sau
                  </button>
               </div>
            </>
         ) : (
            <p>No products found</p>
         )}
      </div>
   );
};

export default ProductList;
