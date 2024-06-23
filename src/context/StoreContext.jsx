import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  const [cartItemList, setCartItemList] = useState({});

  const addToCart = (foodId) => {
    if(!cartItemList[foodId]){
      setCartItemList((prev)=>({...prev,[foodId]:1}));
    }
    else{
      setCartItemList((prev)=>({...prev,[foodId]:prev[foodId]+1}));
    }  
  }

  const removeFromCart = (foodId) => {
    if(cartItemList[foodId]===1){
      const newCartItemList = {...cartItemList};
      delete newCartItemList[foodId];
      setCartItemList(newCartItemList);
    }
    else{
      setCartItemList((prev)=>({...prev,[foodId]:prev[foodId]-1}));
    }
  }

  const getTotalCartAmount = () => {
    let total = 0;
    for (const food in cartItemList) {
      let foodInfo = food_list.find((item) => item._id === food);
      total += foodInfo.price * cartItemList[food];
    }
    return total;
  }
  const contextValue = {
    food_list,
    cartItemList,
    setCartItemList,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
