import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './orders-history.module.css';
import { wsAuthConnectionInit, wsAuthConnectionClose  } from '../../services/store/actions/action-ws-auth';
import { Orders } from '../orders/orders';

export const OrdersHistory = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(wsAuthConnectionInit());
    return () => {
        dispatch(wsAuthConnectionClose());
    };
  },[dispatch]); 

  const { wsAuthLoadingData, data} = useSelector(state => state.wsAuthOrdersUser);
  console.log('OrdersHistory', !data);
  console.log('OrdersHistory', data );

  return (<div className={styles.container}>
        <div className={styles.loader}>
          {(wsAuthLoadingData && !data)?
          <h2 className='text text_type_main-medium'>Загрузка данных...</h2> :
          (!wsAuthLoadingData && !data)? 
          <h2 className='text text_type_main-medium'>На данный момент у вас нет заказов</h2>: null}
        </div>
        {!!data && 
          <ul className={styles.orders}>
            { 
              data.orders.map(order => <Orders key={order._id} order={order} path={'/profile/orders'}/>)
            }
          </ul> 
        }
      </div> 
  );
};