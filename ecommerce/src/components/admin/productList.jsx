



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/products");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleEditProduct = (id) => {
//     navigate(`/admin/editproduct/${id}`); // Navigate to the edit product page
//   };

//   const handleDeleteProduct = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product? This action cannot be undone."
//     );

//     if (confirmDelete) {
//       try {
//         await axios.delete(`http://localhost:5001/api/products/delete/${id}`);
//         setProducts(products.filter((product) => product._id !== id)); // Update the product list
//         alert("Product deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting product", error);
//         alert("Failed to delete product.");
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Product List</h2>
//       <div className="list-group mt-4">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="list-group-item d-flex justify-content-between align-items-center"
//           >
//             <div>
//               {product._id} - {product.name} - ${product.price}
//             </div>
//             <div>
//               <button
//                 onClick={() => handleEditProduct(product._id)}
//                 className="btn btn-primary btn-sm me-2"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteProduct(product._id)}
//                 className="btn btn-danger btn-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleEditProduct = (id) => {
    navigate(`/admin/editproduct/${id}`); // Navigate to the edit product page
  };

  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product? This action cannot be undone."
    );

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5001/api/products/delete/${id}`);
        setProducts(products.filter((product) => product._id !== id)); // Update the product list
        alert("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product", error);
        alert("Failed to delete product.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.name}</h5>
                <p className="card-text" style={{color:'black'}}>
                  <strong>ID:</strong> {product._id}
                  <br />
                  <strong>Price:</strong> ${product.price}
                </p>
                <div className="d-flex justify-content-end">
                  <span
                    onClick={() => handleEditProduct(product._id)}
                    className="text-primary me-3"
                    style={{ cursor: "pointer" }}
                    title="Edit Product"
                  >
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                  </span>
                  <span
                    onClick={() => handleDeleteProduct(product._id)}
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    title="Delete Product"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

