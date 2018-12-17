import React from "react";

const Cart = ({ active }) => {
  return (
    <div>
      Cart is {active ? 'open' : 'closed'}
    </div>
  );
}

export default Cart;
