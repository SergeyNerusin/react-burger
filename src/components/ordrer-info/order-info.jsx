import React, { useEffect } from 'react';
import styles from './order-info.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux'; 
import { useParams } from "react-router-dom";
import { useBurgerIngredients } from '../../utils/burger-ingredients';
import { getOrderInfo, orderInfoClean } from '../../services/store/actions/action-order-info';

export const OrderInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
    
  const { data } = useSelector(state => state.wsOrderAll);
    
  useEffect(() => {
    if (!data){
       dispatch(getOrderInfo(Number(id)));
    }
    return () => {
      dispatch(orderInfoClean());
    };
  },[data, id, dispatch]);

 
  const orderinfo = useSelector(state => state.orderInfo.order);
    
  const order = !!data ? data.orders.find(order => order.number === Number(id)) : orderinfo;
  
  const [burg, price] = useBurgerIngredients(order);

  return !!order && !!burg &&(
  <article className={styles.container}>
    <p className={styles.number + ' text text_type_digits-default mb-10'}>#{order.number}</p>
    <h2 className='text text_type_main-medium mb-3'>{order.name}</h2>
    <p className={styles.status + ' text text_type_main-default mb-15'}>{
    order.status === 'done' ? 'Выполнен' :
    order.status === 'pending' ? 'Готовится' : 'Отменён'
    }</p>
    <p className='text text_type_main-medium mb-6'>Состав:</p>
    <div className={styles.info_container + ' mb-10 '}>
     <ul className={styles.info_wrapper + ' mr-6'}>
      { burg.map(ingr => (
                <li key={ingr._id} className={styles.item}>
                  <img className={styles.img} src={ingr.image} alt={ingr.name}/>
                  <h2 className={styles.title + ' text text_type_main-default'}>{ingr.name}</h2>
                  <div className={styles.item_price}>
                    <span className='text text_type_digits-default'>{ingr.things}</span>
                    <span className='text text_type_main-default'>x</span>
                    <span className='text text_type_digits-default'>{ingr.price}</span>
                    <CurrencyIcon/>
                  </div>
                </li>))
      }
     </ul>
    </div>
    <ul className={styles.wrapper}>
      <li className=' p-0 m-0'>
        <FormattedDate className='text text_type_main-default text_color_inactive' 
                          date={new Date(order.createdAt)}/>
      </li>
      <li className={styles.totalsumm}>
        <span className='text text_type_digits-default mr-2'>
          {price}
        </span>
        <CurrencyIcon/>
      </li>
    </ul>
  </article>
);
}; 