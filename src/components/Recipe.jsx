import React from 'react'
import Card from '@mui/material/Card';
import FoodHeader from './FoodHeader'
import FoodFooter from './FoodFooter';

const Recipe = (props) => {
  return (
    <div>
       <Card >
        <FoodHeader recipe={props.recipe}/>
        <FoodFooter recipe={props.recipe}/>
    </Card>
    </div>
  )
}

export default Recipe