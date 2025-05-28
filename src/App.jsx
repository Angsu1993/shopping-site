import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import products from './data/products';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1>My Shopping Site</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cartItems={cart} />
    </div>
  );
}

export default App;
