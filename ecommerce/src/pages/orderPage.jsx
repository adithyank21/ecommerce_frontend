


// // import React, { useEffect, useState } from 'react';
// // import { Container, Row, Col, ProgressBar, Card, Button } from 'react-bootstrap';

// // function OrderPage() {
// //   const [orders, setOrders] = useState([]);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const user = JSON.parse(localStorage.getItem('user'));
// //     if (user && user.id) {
// //       setUserId(user.id);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (userId) {
// //       const fetchOrders = async () => {
// //         try {
// //           const response = await fetch(`http://localhost:5001/api/orders/getOrdersByUser/${userId}`);
// //           if (!response.ok) {
// //             throw new Error('Failed to fetch orders');
// //           }
// //           const data = await response.json();
// //           setOrders(data.orders || []);
// //         } catch (error) {
// //           console.error('Error fetching orders:', error);
// //         }
// //       };

// //       fetchOrders();
// //     }
// //   }, [userId]);

// //   const getStatusDisplay = (status) => {
// //     switch (status.toLowerCase()) {
// //       case 'pending':
// //         return 'Order Received';
// //       case 'processing':
// //         return 'Preparing Order';
// //       case 'shipped':
// //         return 'Shipped';
// //       case 'out for delivery':
// //         return 'Out for Delivery';
// //       case 'delivered':
// //         return 'Delivered';
// //       case 'cancelled':
// //         return 'Cancelled';
// //       default:
// //         return 'Unknown Status';
// //     }
// //   };

// //   const getOrderProgressPercentage = (status) => {
// //     switch (status.toLowerCase()) {
// //       case 'pending':
// //         return 20;
// //       case 'processing':
// //         return 40;
// //       case 'shipped':
// //         return 60;
// //       case 'out for delivery':
// //         return 80;
// //       case 'delivered':
// //         return 100;
// //       case 'cancelled':
// //         return 0;
// //       default:
// //         return 0;
// //     }
// //   };

// //   const handleCancelOrder = async (orderId, productId) => {
// //     const confirmCancel = window.confirm('Are you sure you want to cancel this product order?');

// //     if (confirmCancel) {
// //       try {
// //         const response = await fetch(`http://localhost:5001/api/orders/updateOrderStatus/${orderId}`, {
// //           method: 'PUT',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({ status: 'cancelled' }),
// //         });

// //         if (!response.ok) {
// //           const errorData = await response.json();
// //           throw new Error(errorData.message || 'Failed to cancel product order');
// //         }

// //         const updatedOrder = await response.json();

// //         setOrders((prevOrders) =>
// //           prevOrders.map((order) =>
// //             order.orderId === updatedOrder.order.orderId
// //               ? {
// //                   ...order,
// //                   status: updatedOrder.order.status,
// //                   products: order.products.map((product) =>
// //                     product._id === productId ? { ...product, status: 'cancelled' } : product
// //                   ),
// //                 }
// //               : order
// //           )
// //         );

// //         alert('Product order cancelled successfully.');
// //       } catch (error) {
// //         console.error('Error cancelling product order:', error.message);
// //       }
// //     }
// //   };

// //   return (
// //     <Container style={{ padding: '40px 20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
// //       <h1 className="text-center mb-4" style={{ color: '#343a40', fontWeight: 'bold' }}>
// //         Your Orders
// //       </h1>
// //       {orders.length === 0 ? (
// //         <Row className="justify-content-center">
// //           <Col>
// //             <p className="text-center" style={{ fontSize: '18px', color: '#6c757d' }}>
// //               No orders placed yet. Please go to the checkout page to place an order.
// //             </p>
// //           </Col>
// //         </Row>
// //       ) : (
// //         orders.map((order) => (
// //           <Row key={order._id} className="mb-4 justify-content-center">
// //             <Col lg={10} md={12}>
// //               <Card
// //                 className="shadow-sm border-light"
// //                 style={{ borderRadius: '15px', backgroundColor: '#ffffff', padding: '20px' }}
// //               >
// //                 <h4 className="text-dark">Order ID: {order.orderId}</h4>
// //                 <h5>Status: {getStatusDisplay(order.status)}</h5>
// //                 <ProgressBar
// //                   now={getOrderProgressPercentage(order.status)}
// //                   label={getStatusDisplay(order.status)}
// //                   style={{ height: '12px', marginBottom: '20px', borderRadius: '5px' }}
// //                   variant={order.status.toLowerCase() === 'cancelled' ? 'danger' : 'success'}
// //                 />
// //                 <Row>
// //                   {order.products.map((product) => (
// //                     <Col lg={4} md={6} sm={12} key={product._id} className="mb-3">
// //                       <Card
// //                         className="shadow-sm border-0"
// //                         style={{
// //                           borderRadius: '10px',
// //                           backgroundColor: '#ffffff',
// //                         }}
// //                       >
// //                         <Card.Img
// //                           variant="top"
// //                           src={`http://localhost:5001/${product.productId.image}`}
// //                           style={{
// //                             height: '200px',
// //                             objectFit: 'contain',
// //                             borderRadius: '10px 10px 0 0',
// //                           }}
// //                         />
// //                         <Card.Body style={{ padding: '15px' }}>
// //                           <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>
// //                             {product.productId.name}
// //                           </Card.Title>
// //                           <Card.Text style={{ fontSize: '14px', margin: '10px 0' ,color:'black'}}>
// //                             Price: Rs. {product.price}
// //                           </Card.Text>
// //                           <Card.Text style={{ fontSize: '14px',color:'black' }}>
// //                             Quantity: {product.quantity}
// //                           </Card.Text>
                          
// //                         </Card.Body>
// //                       </Card>
// //                     </Col>
// //                   ))}
// //                 </Row>
// //               </Card>
// //             </Col>
// //           </Row>
// //         ))
// //       )}
// //     </Container>
// //   );
// // }

// // export default OrderPage;



// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, ProgressBar, Card, Button } from 'react-bootstrap';

// function OrderPage() {
//   const [orders, setOrders] = useState([]);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user.id) {
//       setUserId(user.id);
//     }
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       const fetchOrders = async () => {
//         try {
//           const response = await fetch(`http://localhost:5001/api/orders/getOrdersByUser/${userId}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch orders');
//           }
//           const data = await response.json();
//           setOrders(data.orders || []);
//         } catch (error) {
//           console.error('Error fetching orders:', error);
//         }
//       };

//       fetchOrders();
//     }
//   }, [userId]);

//   const getStatusDisplay = (status) => {
//     switch (status.toLowerCase()) {
//       case 'pending':
//         return 'Order Received';
//       case 'processing':
//         return 'Preparing Order';
//       case 'shipped':
//         return 'Shipped';
//       case 'out for delivery':
//         return 'Out for Delivery';
//       case 'delivered':
//         return 'Delivered';
//       case 'cancelled':
//         return 'Cancelled';
//       default:
//         return 'Unknown Status';
//     }
//   };

//   const getOrderProgressSteps = (status) => {
//     const steps = [
//       { label: 'Order Received', value: 'pending' },
//       { label: 'Preparing Order', value: 'processing' },
//       { label: 'Shipped', value: 'shipped' },
//       { label: 'Out for Delivery', value: 'out for delivery' },
//       { label: 'Delivered', value: 'delivered' },
//       { label: 'Cancelled', value: 'cancelled' },
//     ];

//     const currentStepIndex = steps.findIndex(step => step.value === status.toLowerCase());
//     return steps.map((step, index) => ({
//       ...step,
//       isActive: index <= currentStepIndex,
//     }));
//   };

//   const handleCancelOrder = async (orderId, productId) => {
//     const confirmCancel = window.confirm('Are you sure you want to cancel this product order?');

//     if (confirmCancel) {
//       try {
//         const response = await fetch(`http://localhost:5001/api/orders/updateOrderStatus/${orderId}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ status: 'cancelled' }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to cancel product order');
//         }

//         const updatedOrder = await response.json();

//         setOrders((prevOrders) =>
//           prevOrders.map((order) =>
//             order.orderId === updatedOrder.order.orderId
//               ? {
//                   ...order,
//                   status: updatedOrder.order.status,
//                   products: order.products.map((product) =>
//                     product._id === productId ? { ...product, status: 'cancelled' } : product
//                   ),
//                 }
//               : order
//           )
//         );

//         alert('Product order cancelled successfully.');
//       } catch (error) {
//         console.error('Error cancelling product order:', error.message);
//       }
//     }
//   };

//   return (
//     <Container style={{ padding: '40px 20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
//       <h1 className="text-center mb-4" style={{ color: '#343a40', fontWeight: 'bold' }}>
//         Your Orders
//       </h1>
//       {orders.length === 0 ? (
//         <Row className="justify-content-center">
//           <Col>
//             <p className="text-center" style={{ fontSize: '18px', color: '#6c757d' }}>
//               No orders placed yet. Please go to the checkout page to place an order.
//             </p>
//           </Col>
//         </Row>
//       ) : (
//         orders.map((order) => (
//           <Row key={order._id} className="mb-4 justify-content-center">
//             <Col lg={10} md={12}>
//               <Card
//                 className="shadow-sm border-light"
//                 style={{ borderRadius: '15px', backgroundColor: '#ffffff', padding: '20px' }}
//               >
//                 <h4 className="text-dark">Order ID: {order.orderId}</h4>
//                 <h5>Status: {getStatusDisplay(order.status)}</h5>

//                 <div className="mb-3">
//                   {getOrderProgressSteps(order.status).map((step, index) => (
//                     <div key={index} className="d-flex align-items-center">
//                       <ProgressBar
//                         now={step.isActive ? 100 : 0}
//                         label={step.label}
//                         style={{ height: '12px', marginBottom: '10px', flexGrow: 1, marginRight: '10px' }}
//                         variant={step.isActive ? 'success' : 'secondary'}
//                       />
//                       <div className={`step-label ${step.isActive ? 'active' : ''}`}>
//                         {step.label}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <Row>
//                   {order.products.map((product) => (
//                     <Col lg={4} md={6} sm={12} key={product._id} className="mb-3">
//                       <Card
//                         className="shadow-sm border-0"
//                         style={{
//                           borderRadius: '10px',
//                           backgroundColor: '#ffffff',
//                         }}
//                       >
//                         <Card.Img
//                           variant="top"
//                           src={`http://localhost:5001/${product.productId.image}`}
//                           style={{
//                             height: '200px',
//                             objectFit: 'contain',
//                             borderRadius: '10px 10px 0 0',
//                           }}
//                         />
//                         <Card.Body style={{ padding: '15px' }}>
//                           <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>
//                             {product.productId.name}
//                           </Card.Title>
//                           <Card.Text style={{ fontSize: '14px', margin: '10px 0' ,color:'black'}}>
//                             Price: Rs. {product.price}
//                           </Card.Text>
//                           <Card.Text style={{ fontSize: '14px',color:'black' }}>
//                             Quantity: {product.quantity}
//                           </Card.Text>
//                         </Card.Body>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
//               </Card>
//             </Col>
//           </Row>
//         ))
//       )}
//     </Container>
//   );
// }

// export default OrderPage;


import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      setUserId(user.id);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchOrders = async () => {
        try {
          const response = await fetch(`http://localhost:5001/api/orders/getOrdersByUser/${userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch orders');
          }
          const data = await response.json();
          setOrders(data.orders || []);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };

      fetchOrders();
    }
  }, [userId]);

  const getStatusDisplay = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'Order Received';
      case 'processing':
        return 'Preparing Order';
      case 'shipped':
        return 'Shipped';
      case 'out for delivery':
        return 'Out for Delivery';
      case 'delivered':
        return 'Delivered';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown Status';
    }
  };

  const getOrderProgressPercentage = (status) => {
    switch (status.toLowerCase()) {
      // case 'order placed':
      //   return 16.66;
      case 'processing':
        return 33.33;
      case 'shipped':
        return 50;
      case 'out for delivery':
        return 75;
      case 'delivered':
        return 100;
      case 'cancelled':
        return 0;
      default:
        return 0;
    }
  };

  const renderSVGProgressBar = (percentage) => {
    const width = 300;  // Width of the SVG container
    const height = 20;  // Height of the SVG container
    const strokeWidth = 5;  // Stroke width of the progress bar
    const progressWidth = (percentage / 100) * width;

    return (
      <svg width={width} height={height}>
        <rect
          width={width}
          height={height}
          rx={10}
          ry={10}
          fill="#e0e0e0"  // Background color
        />
        <rect
          width={progressWidth}
          height={height}
          rx={10}
          ry={10}
          fill="#4CAF50"  // Progress color
        />
      </svg>
    );
  };

  return (
    <Container style={{ padding: '40px 20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 className="text-center mb-4" style={{ color: '#343a40', fontWeight: 'bold' }}>
        Your Orders
      </h1>
      {orders.length === 0 ? (
        <Row className="justify-content-center">
          <Col>
            <p className="text-center" style={{ fontSize: '18px', color: '#6c757d' }}>
              No orders placed yet. Please go to the checkout page to place an order.
            </p>
          </Col>
        </Row>
      ) : (
        orders.map((order) => (
          <Row key={order._id} className="mb-4 justify-content-center">
            <Col lg={10} md={12}>
              <Card
                className="shadow-sm border-light"
                style={{ borderRadius: '15px', backgroundColor: '#ffffff', padding: '20px' }}
              >
                <h4 className="text-dark">Order ID: {order.orderId}</h4>
                <h5>Status: {getStatusDisplay(order.status)}</h5>

                {/* Custom SVG progress bar */}
                <div style={{ marginBottom: '20px' }}>
                  {renderSVGProgressBar(getOrderProgressPercentage(order.status))}
                </div>

                <Row>
                  {order.products.map((product) => (
                    <Col lg={4} md={6} sm={12} key={product._id} className="mb-3">
                      <Card
                        className="shadow-sm border-0"
                        style={{
                          borderRadius: '10px',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={`http://localhost:5001/${product.productId.image}`}
                          style={{
                            height: '200px',
                            objectFit: 'contain',
                            borderRadius: '10px 10px 0 0',
                          }}
                        />
                        <Card.Body style={{ padding: '15px' }}>
                          <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>
                            {product.productId.name}
                          </Card.Title>
                          <Card.Text style={{ fontSize: '14px', margin: '10px 0' ,color:'black'}}>
                            Price: Rs. {product.price}
                          </Card.Text>
                          <Card.Text style={{ fontSize: '14px',color:'black' }}>
                            Quantity: {product.quantity}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
}

export default OrderPage;

