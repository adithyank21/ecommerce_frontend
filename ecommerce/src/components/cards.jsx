



import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaTag, FaCartPlus } from 'react-icons/fa';
import '../CSS/card.css'; // Custom card styles

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      const user = JSON.parse(localStorage.getItem('user')); // Parse the stored user data
      const userId = user?.id; // Extract the userId from the user object

      if (!userId) {
        console.error('User is not logged in.');
        return;
      }

      // Fetch existing cart items for the user
      const response = await fetch(`http://localhost:5001/api/cart?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }

      const cartData = await response.json();
      const cartItems = Array.isArray(cartData) ? cartData : cartData.items || []; // Ensure it's an array

      const existingProduct = cartItems.find(item => item.productId === product._id);

      if (existingProduct) {
        // If the product exists, update the quantity
        const updatedCartItem = await fetch(`http://localhost:5001/api/cart/${existingProduct._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            quantity: existingProduct.quantity + 1, // Increase quantity by 1
          }),
        });

        if (!updatedCartItem.ok) {
          throw new Error('Failed to update cart item');
        }

        const updatedItem = await updatedCartItem.json();
        console.log('Cart item updated:', updatedItem);
      } else {
        // If the product doesn't exist, add it to the cart
        const addedProduct = await fetch('http://localhost:5001/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userId, // Pass the userId
            productId: product._id,
            quantity: 1,
          }),
        });

        if (!addedProduct.ok) {
          throw new Error('Failed to add product to cart');
        }

        const newItem = await addedProduct.json();
        console.log('Product added to cart:', newItem);
      }

      // Redirect to cart page after adding or updating the item
      navigate('/cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            placeholder="Search products..."
            style={{ borderRadius: '30px', padding: '15px', fontSize: '16px' }}
          />
        </Col>
      </Row>
      <Row>
        {products
          .filter((product) =>
            product.name?.toLowerCase().includes(searchTerm.toLowerCase() || '')
          )
          .map((product) => (
            <Col lg={3} md={4} sm={6} key={product._id} className="mb-4">
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={product.image ? `http://localhost:5001/${product.image}` : 'default-image-url.jpg'}
                  className="product-image"
                />
                <Card.Body>
                  <Card.Title className="product-title" style={{ textAlign: 'center' }}>
                    {product.name}
                  </Card.Title>
                  <Card.Text className="product-price" style={{ color: 'black' }}>
                    <FaTag style={{ color: '#28b5e1', fontSize: '1.5rem', marginRight: '5px' }} />
                    Rs. {product.price}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaCartPlus style={{ marginRight: '5px' }} />
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default ProductCard;



