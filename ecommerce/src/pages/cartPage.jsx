



// import { useEffect, useState } from 'react';
// import { Button, Card, Container, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import '../CSS/cart.css';

// function CartPage() {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem('user'));
//         const userId = user?.id;

//         if (!userId) {
//           console.error('User ID not found in localStorage.');
//           return;
//         }

//         const response = await fetch(`http://localhost:5001/api/cart?userId=${userId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch cart');
//         }

//         const data = await response.json();
//         setCart(Array.isArray(data) ? data : data.items || []);
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//       }
//     };

//     fetchCart();
//   }, []);

//   const handleRemoveFromCart = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/cart/${id}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to remove item from cart');
//       }

//       const updatedCart = cart.filter((product) => product._id !== id);
//       setCart(updatedCart);
//     } catch (error) {
//       console.error('Error removing product from cart:', error);
//     }
//   };

//   const handleQuantityChange = async (id, quantity) => {
//     if (quantity < 1) return; // Prevent quantity from going below 1

//     const updatedCart = cart.map((product) =>
//       product._id === id ? { ...product, quantity } : product
//     );
//     setCart(updatedCart);

//     try {
//       const response = await fetch(`http://localhost:5001/api/cart/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ quantity }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update quantity');
//       }

//       const data = await response.json();
//       setCart((prevCart) =>
//         prevCart.map((product) =>
//           product._id === id ? { ...product, quantity: data.updatedQuantity } : product
//         )
//       );
//     } catch (error) {
//       console.error('Error updating quantity:', error);

//       setCart((prevCart) =>
//         prevCart.map((product) =>
//           product._id === id ? { ...product, quantity: product.quantity } : product
//         )
//       );
//     }
//   };

//   const handleCheckout = () => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//     navigate('/checkout');
//   };

//   return (
//     <Container style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
//       <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>
//         Your Cart
//       </h1>
//       {cart.length > 0 ? (
//         <Row>
//           {cart.map((product) => (
//             <Col lg={3} md={4} sm={6} key={product._id} className="mb-4">
//               <Card
//                 style={{
//                   backgroundColor: '#ffffff',
//                   borderRadius: '15px',
//                   boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                   transition: 'transform 0.2s ease-in-out',
//                 }}
//                 className="cart-card"
//               >
//                 <Card.Img
//                   variant="top"
//                   src={`http://localhost:5001/${product.productId.image}`}
//                   style={{
//                     height: '200px',
//                     objectFit: 'contain',
//                     borderRadius: '15px 15px 0 0',
//                     width: '100%',
//                   }}
//                 />
//                 <Card.Body style={{ padding: '20px', color: '#333' }}>
//                   <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>
//                     {product.productId.name}
//                   </Card.Title>
//                   <Card.Text style={{ fontSize: '16px', color: 'black' }}>
//                     Price: Rs. {product.productId.price}
//                   </Card.Text>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <Button
//                       variant="secondary"
//                       onClick={() => handleQuantityChange(product._id, product.quantity - 1)}
//                       disabled={product.quantity <= 1}
//                       style={{
//                         borderRadius: '50%',
//                         padding: '5px 10px',
//                         fontSize: '18px',
//                         backgroundColor: '#ddd',
//                         color:"black",
                        
//                       }}
//                     >
//                       -
//                     </Button>
//                     <span style={{ fontSize: '16px', margin: '0 15px' }}>{product.quantity}</span>
//                     <Button
//                       variant="secondary"
//                       onClick={() => handleQuantityChange(product._id, product.quantity + 1)}
//                       style={{
//                         borderRadius: '50%',
//                         padding: '5px 10px',
//                         fontSize: '18px',
//                         backgroundColor: '#ddd',
//                         color:"black"
//                       }}
//                     >
//                       +
//                     </Button>
//                   </div>
//                   <Button
//                     variant="danger"
//                     onClick={() => handleRemoveFromCart(product._id)}
//                     style={{
//                       borderRadius: '20px',
//                       width: '100%',
//                       padding: '12px',
//                       marginTop: '15px',
//                     }}
//                   >
//                     Remove from Cart
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <p className="text-center" style={{ fontSize: '18px', color: '#555' }}>
//           Your cart is empty!
//         </p>
//       )}

//       {cart.length > 0 && (
//         <Button
//           variant="success"
//           onClick={handleCheckout}
//           style={{
//             width: '100%',
//             padding: '12px',
//             marginTop: '20px',
//             borderRadius: '20px',
//             fontSize: '18px',
//           }}
//         >
//           Proceed to Checkout
//         </Button>
//       )}
//     </Container>
//   );
// }

// export default CartPage;







import { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../CSS/cart.css';

function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user?.id;

        if (!userId) {
          console.error('User ID not found in localStorage.');
          return;
        }

        const response = await fetch(`http://localhost:5001/api/cart?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cart');
        }

        const data = await response.json();
        setCart(Array.isArray(data) ? data : data.items || []);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveFromCart = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/cart/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      const updatedCart = cart.filter((product) => product._id !== id);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const handleQuantityChange = async (id, quantity) => {
    if (quantity < 1) return; // Prevent quantity from going below 1

    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, quantity } : product
    );
    setCart(updatedCart);

    try {
      const response = await fetch(`http://localhost:5001/api/cart/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) {
        throw new Error('Failed to update quantity');
      }

      const data = await response.json();
      setCart((prevCart) =>
        prevCart.map((product) =>
          product._id === id ? { ...product, quantity: data.updatedQuantity } : product
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);

      setCart((prevCart) =>
        prevCart.map((product) =>
          product._id === id ? { ...product, quantity: product.quantity } : product
        )
      );
    }
  };

  const handleCheckout = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/checkout');
  };

  return (
    <Container style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>
        Your Cart
      </h1>
      {cart.length > 0 ? (
        <Row>
          {cart.map((product) => (
            <Col lg={3} md={4} sm={6} key={product._id} className="mb-4">
              <Card
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '15px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease-in-out',
                }}
                className="cart-card"
              >
                <Card.Img
                  variant="top"
                  src={`http://localhost:5001/${product.productId.image}`}
                  style={{
                    height: '200px',
                    objectFit: 'contain',
                    borderRadius: '15px 15px 0 0',
                    width: '100%',
                  }}
                />
                <Card.Body style={{ padding: '20px', color: '#333' }}>
                  <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    {product.productId.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '16px', color: 'black' }}>
                    Price: Rs. {product.productId.price}
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
  <Button
    variant="light"
    onClick={() => handleQuantityChange(product._id, product.quantity - 1)}
    disabled={product.quantity <= 1}
    style={{
      borderRadius: '50%',
      padding: '5px 10px',
      fontSize: '18px',
      backgroundColor: '#f8f9fa', // Light grey background
      color: '#6c757d', // Dark grey text
      border: '1px solid #dee2e6', // Subtle border
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Soft shadow
      cursor: product.quantity > 1 ? 'pointer' : 'not-allowed', // Disabled cursor
      transition: 'transform 0.2s',
    }}
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
  >
    -
  </Button>
  <span style={{ fontSize: '16px', margin: '0 15px' }}>{product.quantity}</span>
  <Button
    variant="light"
    onClick={() => handleQuantityChange(product._id, product.quantity + 1)}
    style={{
      borderRadius: '50%',
      padding: '5px 10px',
      fontSize: '18px',
      backgroundColor: '#f8f9fa', // Light grey background
      color: '#6c757d', // Dark grey text
      border: '1px solid #dee2e6', // Subtle border
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Soft shadow
      cursor: 'pointer',
      transition: 'transform 0.2s',
    }}
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
  >
    +
  </Button>
</div>


          
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(product._id)}
                    style={{
                      borderRadius: '20px',
                      width: '100%',
                      padding: '12px',
                      marginTop: '15px',
                    }}
                  >
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center" style={{ fontSize: '18px', color: '#555' }}>
          Your cart is empty!
        </p>
      )}

      {cart.length > 0 && (
        <Button
          variant="success"
          onClick={handleCheckout}
          style={{
            width: '100%',
            padding: '12px',
            marginTop: '20px',
            borderRadius: '20px',
            fontSize: '18px',
          }}
        >
          Proceed to Checkout
        </Button>
      )}
    </Container>
  );
}

export default CartPage;




