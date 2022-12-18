import React from "react";
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './orders.module.css';
import { useLocation, Link } from 'react-router-dom';
import { useBurgerIngredients } from '../../utils/burger-ingredients';

export const Orders = ({order}) => {
  
  const location = useLocation();
  console.log("location", location);
  
  const [burg, price] = useBurgerIngredients(order);
  
  // console.log("order", order);
  // console.log("new_burg", id_burg); 
  // console.log("burg", burg);     

  return ( 
    // <Link to={{  pathname: `/feed/${order._id}`, state: { background: location }}}
          // className={styles.link}>
    <Link to={`/feed/${order._id}`} className={styles.link}> 
      <li className={styles.order + ' p-6'}>
        <div className={styles.bar_numberOrder_time}>
          <span className='text text_type_digits-default'>{`#${order.number}`}</span>
          <FormattedDate className='text text_type_main-default text_color_inactive' 
                          date={new Date(order.createdAt)}/>
        </div>
        <h2 className='text text_type_main-medium'>{order.name}</h2>
        <div className={styles.wrapper}>
          <ul className={styles.img_container}>
            { burg.map((ingr, index) => (index <= 4) ?  
                <li key={ingr._id} className={styles.item}
                     style={{top: 0, right: `${16*(index)}px`, zIndex: `${5-index}`}}>
                    <img className={styles.img} src={ingr.image} 
                         alt={ingr.name}/>
                </li>
                : 
                (index === 5) ?
                <li key={ingr._id} className={styles.item}
                     style={{top: 0, right: `${16*(index)}px`, zIndex: `${5-index}`}}>
                    <img className={styles.img} src={ingr.image} 
                         alt={ingr.name}/>
                    <div className={styles.count}>
                      <span className={styles.counter}>
                        {`+ ${burg.length - index}`}
                      </span>
                    </div>
                </li> : null)
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