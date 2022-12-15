import React from "react";
import { CurrencyIcon, Counter, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './orders.module.css';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export const Orders = ({order}) => {

  const listIngredients = useSelector(store => store.ingredients.data);
  const id_burg = order.ingredients.reduce((prevVal, item) => (prevVal[item] = (prevVal[item] || 0) + 1, prevVal), {});

  const burg = Object.keys(id_burg).map(id => listIngredients.find(ingr => {
    if(ingr._id === id && ingr.type !== 'bun'){
        ingr.things = id_burg[id];
        return ingr;
    } else if(ingr._id === id && ingr.type === 'bun'){
        ingr.things = 2;
        return ingr;
    } 
  }));

  const price = burg.reduce((sum, item) => sum + item.price * item.things,0);
  
  console.log("order", order);
  console.log("new_burg", id_burg); 
  console.log("burg", burg);     

  return ( 
    <Link to={{ pathname:`/feed/${order._id}`, state:{background: location }}}>
      <li className={styles.order + ' p-6'}>
        <div className={styles.bar_numberOrder_time}>
          <span className='text text_type_digits-default'>{`#${order.number}`}</span>
          <FormattedDate className='text text_type_main-default text_color_inactive' 
                          date={new Date(order.createdAt)}/>
        </div>
        <h2 className='text text_type_main-medium'>{order.name}</h2>
        <div className={styles.wrapper}>
          <ul className={styles.img_container}>
            { burg.map(ingr => (
                <li key={ingr._id} className={styles.item}>
                  <img className={styles.img} src={ingr.image} alt={ingr.name}/>
                </li>))
            }
          </ul>
          <ul className={styles.totalsumm}>
            <li className='text text_type_digits-default pr-2'>
              {price}
            </li>
            <li>
              <CurrencyIcon type='primary' />
            </li>
          </ul>
        </div>
      </li>
    </Link>);
};