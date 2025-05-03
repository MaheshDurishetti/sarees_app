import '../App.css';
import { useState, createContext, Suspense } from "react";
import { sarees } from "./SareesData";
import Header from './Header';
import { Routes, Route } from 'react-router-dom';

export const create = createContext();

const Cart = () => {
  const [products, setProducts] = useState(sarees);
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = (id) => {
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 }
      }
      return item;
    });
    setProducts(updatedProducts);
    setCartCount(cartCount + 1);
  };

  return (
    <create.Provider value={{ cartCount, products, handleAdd }}>
      {/* Render Header Always */}
      <Header />

      <Suspense fallback='loading.....'>
        <Routes>
          {/* add other routes later if needed */}
        </Routes>
      </Suspense>

      <div className="product-container">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt="image" />
            <div>
              <button onClick={() => handleAdd(item.id)}>ADD</button>
              <span>{item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </create.Provider>
  );
};

export default Cart;
