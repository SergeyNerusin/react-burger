import React from 'react';
import { useSelector } from 'react-redux';
import styles from './orders-history.module.css';
import { Orders } from '../orders/orders';

export const OrdersHistory = () => {

  const { wsAuthLoadingData, data } = useSelector(state => state.wsAuthOredersUser);
  console.log('OrdersHistory', data );

  return !!data && (
      <div className={styles.container}>
        {wsAuthLoadingData && !data.orders ? 
        <h2 className='text text_type_main-medium'>Загрузка данных...</h2> :
        !wsAuthLoadingData && <h2 className='text text_type_main-medium'>На данный момент у вас нет заказов</h2>}
        {!!data.orders && 
          <ul className={styles.orders}>
            { 
              data.orders.map(order => <Orders key={order._id} order={order} path={'/profile/orders'}/>)
            }
          </ul> 
        }
      </div> 
  );
};