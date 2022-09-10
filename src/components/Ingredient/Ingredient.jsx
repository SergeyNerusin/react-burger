import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import ingredientType from '../../utils/type';
import style from './Ingredient.module.css';

function Ingredient({data}) {
  const [count, setCount] = React.useState(0);

  return (
    <li className={style.ingredient}>
      
    </li>
  )
}

Ingredient.propTypes = {
  data: ingredientType
};

export default Ingredient