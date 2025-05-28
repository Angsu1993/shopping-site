import { Card, CardContent, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        cartItems.map((item) => (
          <Card key={item.id} sx={{ marginBottom: '16px' }}>
            <CardContent>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="h6" color="primary">
                €{item.price.toFixed(2)}
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => handleRemoveFromCart(item.id)}
                sx={{ marginTop: '16px' }}
              >
                Remove from Cart
              </Button>
            </CardContent>
          </Card>
        ))
      )}
      <Link to="/checkout">
        <Button variant="contained" color="primary" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </Button>
      </Link>
    </div>
  );
}
export default Cart;