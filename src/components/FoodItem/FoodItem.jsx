import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItemList, addToCart, removeFromCart} = useContext(StoreContext);

  return (    
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name}/>
        {!cartItemList[id]
          ?<img className='add' src={assets.add_icon_white} alt='add' onClick={()=>addToCart(id)}/>
          :<div className='food-item-counter'>
              <img src={assets.remove_icon_red} alt='minus' onClick={()=>removeFromCart(id)}/>
              <p>{cartItemList[id]}</p>
              <img src={assets.add_icon_green} alt='plus' onClick={()=>addToCart(id)}/>
            </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt='rating'/>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem;