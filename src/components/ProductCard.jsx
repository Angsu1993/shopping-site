import { Card, CardContent, CardMedia, Typography, Button , Stack, IconButton, Chip} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);

     const onAddToCart = () => {
    dispatch(addToCart(product));
  };
    const handleLikeToggle = () => {
    setLiked(prev => !prev);
  };
  return (
    <Card sx={{ margin: '16px',
    boxShadow: 3,
    borderRadius: 2,
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',}}>
      <CardContent sx={{ padding: 2 }}>
        {product.image && (
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'contain', borderRadius: 1, marginBottom: 2, width:'100%', height:100, marginLeft: 'auto', marginRight: 'auto' }}
        />
      )}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" fontWeight={600} sx={{overflow: 'hidden',textOverflow: 'ellipsis',display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical' }}>{product.title}</Typography>
          <IconButton onClick={handleLikeToggle} color="error" size='small' alignItems="flex-start">
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Stack>

        <Typography variant="h6" color="primary">
          ${product.price.toFixed(2)}
        </Typography>
        <Stack direction="row" spacing={1} mt={2}>
          {product.tags?.map((tag, index) => (
            <Chip key={index} label={tag} variant="outlined" color="primary" />
          ))}
        </Stack>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => onAddToCart(product)}
          sx={{ marginTop: 2 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
export default ProductCard;