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

  useEffect(()=>{
    console.log(cartItemList);
  },[cartItemList]);

  const contextValue = {
    food_list,
    cartItemList,
    setCartItemList,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
