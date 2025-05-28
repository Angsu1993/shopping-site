import { Card, CardContent, CardMedia, IconButton, Box, Typography, Button, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({showSummary, setShowSummary}) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const total= cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div style={{ padding: '10px', width: '87%', }}>
      <Typography variant="h5" fontFamily={'monospace'} mb={3}>
        {showSummary ? 'Order Summary' : 'Shopping Cart'}
      </Typography>
      {!showSummary ? (
        <>
          {cartItems.length === 0 ? (
            <Typography variant="body1">Your cart is empty.</Typography>
          ) : (
            cartItems.map((item) => (
              <Card key={item.id} sx={{ display: 'flex', borderRadius: 2, boxShadow: 3, marginBottom: '16px' }}>
                {item.image && (
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: 'contain',
                      borderRadius: '8px 0 0 8px',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      marginLeft: '16px',
                      marginRight: '16px'
                    }}
                  />
                )}
                <CardContent>
                  <Typography variant="body2" fontWeight={500}>{item.title}</Typography>
                  <Typography variant="body1" color="primary">
                    €{item.price.toFixed(2)}
                  </Typography>
                  <Box display="flex" alignItems="center" mt={2}>
                    <IconButton
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      size="small"
                      color="primary"
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>

                    <Typography variant="body1" sx={{ mx: 1 }}>
                      {item.quantity}
                    </Typography>

                    <IconButton
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      size="small"
                      color="primary"
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                      onClick={() => handleRemoveFromCart(item.id)}
                      size="small"
                      color="error"
                      sx={{ marginLeft: 2 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>

                </CardContent>
              </Card>
            ))
          )}
          <Button variant="contained" color="primary" disabled={cartItems.length === 0} onClick={() => setShowSummary(true)}>
            Proceed to Checkout
          </Button>
        </>
      ) : (
        <>
        {cartItems.map((item) => (
          <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography>
                {item.title} × {item.quantity}
              </Typography>
              <Typography>
                €{(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Total: €{total}</Typography>

          <Button
            variant="outlined"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => setShowSummary(false)}
          >
            Back to Cart
          </Button>
        </>
      )}
    </div >
  );
};
export default Cart;