// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useParams, useNavigate } from "react-router-dom";

// // const EditProduct = () => {
// //   const { id } = useParams(); // Get the product ID from the URL
// //   const navigate = useNavigate();
// //   const [product, setProduct] = useState({
// //     name: "",
// //     price: "",
// //     description: "",
// //     image: null,
// //   });

// //   // Fetch product data when the component is mounted
// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5001/api/products/${id}`);
// //         setProduct(response.data);
// //       } catch (error) {
// //         console.error("Error fetching product", error);
// //         // alert("Failed to fetch product details");
// //       }
// //     };
// //     fetchProduct();
// //   }, [id]);

// //   // Handle form input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setProduct({ ...product, [name]: value });
// //   };

// //   // Handle file input change
// //   const handleFileChange = (e) => {
// //     setProduct({ ...product, image: e.target.files[0] });
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append("name", product.name);
// //     formData.append("price", product.price);
// //     formData.append("description", product.description);
// //     if (product.image) {
// //       formData.append("image", product.image);
// //     }

// //     try {
// //       const response = await axios.put(
// //         `http://localhost:5001/api/products/edit/${id}`,
// //         formData,
// //         { headers: { "Content-Type": "multipart/form-data" } }
// //       );
// //       alert("Product updated successfully!");
// //       navigate("/admin/products"); // Redirect to product list page after successful update
// //     } catch (error) {
// //       console.error("Error updating product", error);
// //       alert("Failed to update product");
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2>Edit Product</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-3">
// //           <label htmlFor="name" className="form-label">Product Name</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="name"
// //             name="name"
// //             value={product.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="price" className="form-label">Price</label>
// //           <input
// //             type="number"
// //             className="form-control"
// //             id="price"
// //             name="price"
// //             value={product.price}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="description" className="form-label">Description</label>
// //           <textarea
// //             className="form-control"
// //             id="description"
// //             name="description"
// //             value={product.description}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="image" className="form-label">Image (Optional)</label>
// //           <input
// //             type="file"
// //             className="form-control"
// //             id="image"
// //             onChange={handleFileChange}
// //           />
// //         </div>
// //         <button type="submit" className="btn btn-primary">Update Product</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditProduct;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSave, faFileImage } from "@fortawesome/free-solid-svg-icons";
// import "bootstrap/dist/css/bootstrap.min.css";

// const EditProduct = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     description: "",
//     image: null,
//   });

//   // Fetch product data when the component is mounted
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/products/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error fetching product", error);
//         // alert("Failed to fetch product details");
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   // Handle file input change
//   const handleFileChange = (e) => {
//     setProduct({ ...product, image: e.target.files[0] });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", product.name);
//     formData.append("price", product.price);
//     formData.append("description", product.description);
//     if (product.image) {
//       formData.append("image", product.image);
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5001/api/products/edit/${id}`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       alert("Product updated successfully!");
//       navigate("/admin/products"); // Redirect to product list page after successful update
//     } catch (error) {
//       console.error("Error updating product", error);
//       alert("Failed to update product");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Edit Product</h2>
//       <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Product Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={product.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="price" className="form-label">Price</label>
//           <input
//             type="number"
//             className="form-control"
//             id="price"
//             name="price"
//             value={product.price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">Description</label>
//           <textarea
//             className="form-control"
//             id="description"
//             name="description"
//             value={product.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="image" className="form-label">Image (Optional)</label>
//           <div className="input-group">
//             <input
//               type="file"
//               className="form-control"
//               id="image"
//               onChange={handleFileChange}
//             />
//             <span className="input-group-text">
//               <FontAwesomeIcon icon={faFileImage} />
//             </span>
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary w-100 d-flex align-items-center justify-content-center">
//           <FontAwesomeIcon icon={faSave} className="me-2" /> Update Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faFileImage } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const EditProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  // Fetch product data when the component is mounted
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    if (product.image) {
      formData.append("image", product.image);
    }

    try {
      const response = await axios.put(
        `http://localhost:5001/api/products/edit/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Product updated successfully!");
      navigate("/admin/products"); // Redirect to product list page after successful update
    } catch (error) {
      console.error("Error updating product", error);
      alert("Failed to update product");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-lg-6 col-md-8 col-sm-12">
        <h2 className="text-center mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control rounded-pill"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              className="form-control rounded-pill"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control rounded"
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image (Optional)</label>
            <div className="input-group">
              <input
                type="file"
                className="form-control rounded-start"
                id="image"
                onChange={handleFileChange}
              />
              <span className="input-group-text bg-primary text-white">
                <FontAwesomeIcon icon={faFileImage} />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 d-flex align-items-center justify-content-center rounded-pill"
          >
            <FontAwesomeIcon icon={faSave} className="me-2" /> Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
