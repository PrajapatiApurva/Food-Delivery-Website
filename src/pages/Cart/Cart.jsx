import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  
  const { cartItemList, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  let amount=0;
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Object.keys(cartItemList).length === 0 && (
          <p className="cart-items-empty">Cart is empty</p>
        )}
        {food_list.map((food, index) => {
          if (cartItemList[food._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item" key={index}>
                  <img src={food.image} alt={food.name} />
                  <p>{food.name}</p>
                  <p>₹{food.price}</p>
                  <p>{cartItemList[food._id]}</p>
                  <p>₹{cartItemList[food._id] * food.price}</p>
                  <button onClick={() => removeFromCart(food._id)}>X</button>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:amount+=2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()+amount}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>Have a promocode?</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Enter promocode" />
            <button>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
