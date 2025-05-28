import { Card, CardContent, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
     const onAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <Card sx={{ maxWidth: 345, margin: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price.toFixed(2)}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => onAddToCart(product)}
          sx={{ marginTop: '16px' }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
export default ProductCard;