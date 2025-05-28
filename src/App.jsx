import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import products from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: 10 }}>
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {!showSummary && products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cartItems={cart} showSummary={showSummary} setShowSummary={setShowSummary}/>
    </div>
  );
}

export default App;
