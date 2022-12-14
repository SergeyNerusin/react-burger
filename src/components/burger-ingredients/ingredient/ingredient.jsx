import React from 'react';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../../utils/type';
import styles from './ingredient.module.css';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { useLocation, Link } from 'react-router-dom';

function Ingredient({data}) {  
  const {ingredients} = useSelector(store => store.burgerConstructor);
  const {bun} = useSelector(store => store.burgerConstructor);
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: data,
  });

  const location = useLocation();
  
  const counter = React.useMemo(
   () => {
    if (data.type !== 'bun' && ingredients !== null) {
      return ingredients.filter((item) => item._id === data._id).length;
    } else if (bun?._id === data._id) {
      return 2;
    } else return 0;
  // eslint-disable-next-line 
  },[bun, ingredients]);
  
  return (
    <Link to={{  pathname: `/ingredients/${data._id}`, state: { background: location }}}
          className={styles.link}>
      <li className={styles.ingredient} ref={dragRef}>
        {counter !== 0 ? <Counter count={counter} size='default'/> : <></>}
        <img src={data.image} alt={data.name} className={styles.image + ' pr-4 pl-4'}/>
        <div className={styles.price + ' mt-1 pr-4 pl-4'}>
          <p className='text text_type_digits-default'>{data.price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <p className='text text_type_main-default mt-1'>{data.name}</p>
      </li>
    </Link>
  )
}

Ingredient.propTypes = {
  data: ingredientType.isRequired
};

export default Ingredient
