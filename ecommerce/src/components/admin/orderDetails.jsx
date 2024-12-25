// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Modal, Button, Table, Form } from "react-bootstrap";

// function OrderDetails() {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [status, setStatus] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   // Fetch all orders
//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get("http://localhost:5001/api/orders/getOrders");
//       setOrders(response.data.orders);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   // Update order status
//   const updateOrderStatus = async (orderId) => {
//     try {
//       await axios.put(`http://localhost:5001/api/orders/updateOrderStatus/${orderId}`, {
//         status,
//       });
//       alert("Order status updated successfully");
//       fetchOrders(); // Refresh the orders
//       setShowModal(false);
//     } catch (error) {
//       console.error("Error updating order status:", error);
//       alert("Failed to update order status");
//     }
//   };

//   // Open modal and set selected order
//   const handleViewOrder = (order) => {
//     setSelectedOrder(order);
//     setStatus(order.status);
//     setShowModal(true);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Address</th>
//             <th>Payment Method</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id}>
//               <td>{order.orderId}</td>
//               <td>{order.address}</td>
//               <td>{order.paymentMethod}</td>
//               <td>{order.status}</td>
//               <td>
//                 <Button variant="primary" onClick={() => handleViewOrder(order)}>
//                   View
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Modal for Viewing Order Details */}
//       {selectedOrder && (
//         <Modal show={showModal} onHide={() => setShowModal(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Order Details</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h5>Order ID: {selectedOrder.orderId}</h5>
//             <p><strong>Address:</strong> {selectedOrder.address}</p>
//             <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod}</p>
//             <p><strong>Status:</strong> {selectedOrder.status}</p>
//             <h6>Products:</h6>
//             <ul>
//               {selectedOrder.products.map((product) => (
//                 <li key={product._id}>
//                   <img
//                     src={`http://localhost:5001/${product.productId.image}`}
//                     alt={product.productId.name}
//                     style={{ width: "50px", height: "50px", marginRight: "10px" }}
//                   />
//                   {product.productId.name} - {product.quantity} x ₹{product.price}
//                 </li>
//               ))}
//             </ul>
//             <Form.Group className="mt-3">
//               <Form.Label>Update Status</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//               >
//                 <option value="Order Placed">Order Placed</option>
//                 <option value="Processing">Processing</option>
//                 <option value="Shipped">Shipped</option>
//                 <option value="Delivered">Delivered</option>
//                 <option value="Cancelled">Cancelled</option>
//               </Form.Control>
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>
//               Close
//             </Button>
//             <Button
//               variant="success"
//               onClick={() => updateOrderStatus(selectedOrder.orderId)}
//             >
//               Update Status
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default OrderDetails;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Table, Form } from "react-bootstrap";
import { FaEye, FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../CSS/OrderDetails.css"; // Custom styles

function OrderDetails() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/orders/getOrders");
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Update order status
  const updateOrderStatus = async (orderId) => {
    try {
      await axios.put(`http://localhost:5001/api/orders/updateOrderStatus/${orderId}`, {
        status,
      });
      alert("Order status updated successfully");
      fetchOrders(); // Refresh the orders
      setShowModal(false);
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status");
    }
  };

  // Open modal and set selected order
  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setStatus(order.status);
    setShowModal(true);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="order-details-container">
      <h1 className="text-center text-primary mb-4">Order Management</h1>
      <Table striped bordered hover responsive className="shadow">
        <thead className="table-dark">
          <tr>
            <th>Order ID</th>
            <th>Address</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="align-middle">
              <td>{order.orderId}</td>
              <td>{order.address}</td>
              <td>{order.paymentMethod}</td>
              <td>
                <span className={`status-badge status-${order.status.toLowerCase().replace(/ /g, '-')}`}>{order.status}</span>
              </td>
              <td>
                <Button
                  variant="primary"
                  className="me-2 d-flex align-items-center"
                  onClick={() => handleViewOrder(order)}
                >
                  <FaEye className="me-1" /> View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Viewing Order Details */}
      {selectedOrder && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 className="text-primary">Order ID: {selectedOrder.orderId}</h5>
            <p><strong>Address:</strong> {selectedOrder.address}</p>
            <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <h6>Products:</h6>
            <ul className="product-list">
              {selectedOrder.products.map((product) => (
                <li key={product._id} className="product-item d-flex align-items-center">
                  <img
                    src={`http://localhost:5001/${product.productId.image}`}
                    alt={product.productId.name}
                    className="product-image me-3"
                  />
                  <div>
                    {product.productId.name} - {product.quantity} x ₹{product.price}
                  </div>
                </li>
              ))}
            </ul>
            <Form.Group className="mt-3">
              <Form.Label>Update Status</Form.Label>
              <Form.Control
                as="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="form-select"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button
              variant="success"
              onClick={() => updateOrderStatus(selectedOrder.orderId)}
              className="d-flex align-items-center"
            >
              <FaEdit className="me-1" /> Update Status
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default OrderDetails;