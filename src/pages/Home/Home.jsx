import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState('all');

  return (
    <div>
      <Header/>
      <ExploreMenu onCategory={category} onSetCategory={setCategory}/>
      <FoodDisplay onCategory={category}/>
    </div>
  )
}

export default Home