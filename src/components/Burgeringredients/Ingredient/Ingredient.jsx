import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';
import style from './Ingredient.module.css';

function Ingredient({data}) {
  const [count, setCount] = React.useState(0);
  const { name, price, image } = data; 
  return (
    <li className={style.ingredient}>
      <Counter count={count} size="default" onClick={setCount}/>
      <img src={image} alt={name} className={style.image + ' pr-4 pl-4'}/>
      <div className={style.price + ' mt-1 pr-4 pl-4'}>
        <p className='text text_type_digits-default'>{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default mt-1">{name}</p>
    </li>
  )
}

Ingredient.propTypes = {
  data: PropTypes.object.isRequired
};

export default Ingredient