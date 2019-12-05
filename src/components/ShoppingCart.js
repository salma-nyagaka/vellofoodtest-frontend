import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import {Tshirt} from './Tshirt';

const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(cart);

  return (
    <div>
      <span>items in cart : {cart.length}</span>
      <br />
      <span>total price : {totalPrice}</span>
      <br/>
      {cart.map(item => (<h6>{item.name} - {item.price}</h6>))}
    </div>
  )
}

export default ShoppingCart