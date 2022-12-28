import React from "react";
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './orders.module.css';
import { useLocation, Link } from 'react-router-dom';
import { useBurgerIngredients } from '../../utils/use-burger-ingredients';
import PropTypes from 'prop-types';

export const Orders = ({ order, path }) => {
  
  const location = useLocation();
  // console.log('Orders location', location);
  // console.log('Orders path:', path);
  const [burg, price] = useBurgerIngredients(order);
  
  return !!burg &&( 
    <Link to={{ pathname: `${path}/${order.number}`, state: { background: location }}}
          className={styles.link}>
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
               !!ingr && <li key={ingr._id} 
                    className={styles.item}
                    style={{top: 0, right: `${16*(index)}px`, zIndex: `${5-index}`}}>
                  <img className={styles.img} src={ingr.image} alt={ingr.name}/>
                </li>
                : 
                (index === 5) ?
                !!ingr && <li key={ingr._id} 
                    className={styles.item}
                    style={{top: 0, right: `${16*(index)}px`, zIndex: `${5-index}`}}>
                  <img className={styles.img} src={ingr.image} alt={ingr.name}/>
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

Orders.propTypes = {
	order: PropTypes.object.isRequired,
	path: PropTypes.string.isRequired
};