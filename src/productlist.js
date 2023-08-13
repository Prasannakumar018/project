import React, { useState } from 'react';
import product1Image from './images/1.jpg';
import product2Image from './images/2.jpg';
import product3Image from './images/3.jpg';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';



function ProductList() {
  const navigate= useNavigate();
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const sum=0;
  const products = [
    { id: 1, name: 'Product 1', price: 9.99, img: product1Image },
    { id: 2, name: 'Product 2', price: 19.99, img: product2Image },
    { id: 3, name: 'Product 3', price: 14.99, img: product3Image },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 , sum:item.price+sum} : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const toggleCartVisibility = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };
  
  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id? { ...item, quantity: item.quantity - 1 }: item
      ).filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal=()=>{
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };
  
  const handlepayment=()=>{
    const total = calculateTotal();
    navigate('/payment', {state:{total }} );
  };
 
  

  return (
    <div>
      <h2><center>Product List</center></h2>
      <ul className='productList'>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <Button variant="outlined">Price: ${product.price}</Button>
            <img className="image" src={product.img} alt={product.name} />
           <br/>
            <Button variant="contained" onClick={() => addToCart(product)}>
    Add to Cart
  </Button>

          </li>
        ))}


      </ul>
      <h2>Cart</h2>
      <Button variant="contained" color="success" onClick={toggleCartVisibility} >
        {showCart ? 'Hide Cart' : 'Show Cart'}
      </Button>
      <br/>
      {showCart && (
        <ul className='productList'>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <img src={product.img} alt={product.name} />
              <p>Quantity:{product.quantity}</p>
              <Button variant="outlined" color="error" onClick={()=>removeFromCart(product)}>DELETE</Button>
            </li>
            
          ))}
         <p>TOTAL:${calculateTotal()}</p>
         <br/>
         <Button color="secondary" size="small" variant="outlined" onClick={handlepayment}> Process payment</Button>
        </ul>
       
      )}
    
    </div>
  );
}

export default ProductList;