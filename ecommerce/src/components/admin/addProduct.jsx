import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null, // File input
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

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
      const response = await axios.post("http://localhost:5001/api/products/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product added successfully!");
      setProduct({ name: "", price: "", description: "", image: null });
    } catch (error) {
      console.error("Error adding product", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image (Optional)</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
