import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ onCategory }) => {
  
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-diplay'>
      <h2>Top Dishes near you</h2>
      <div className='food-display-list'>
        {
          food_list.map((food, index) => 
            {
              if(food.category === onCategory || onCategory === 'all'){
                return (
                  <FoodItem
                    key={index}
                    id={food._id}
                    name={food.name}
                    price={food.price}
                    description={food.description}
                    image={food.image}
                  />
                )
              }
              
            }
          )
        }
      </div>
    </div>
  )
}

export default FoodDisplay;