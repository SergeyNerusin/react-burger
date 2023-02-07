import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../hooks/redux-hoks';
import styles from './orders-history.module.css';
import { wsAuthConnectionInit, wsAuthConnectionClose  } from '../../services/store/actions/action-ws-auth';
import { Orders } from '../orders/orders';
import { TOrder } from '../../utils/type';

export const OrdersHistory: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(wsAuthConnectionInit());
    return () => {
        dispatch(wsAuthConnectionClose());
    };
  },[dispatch]); 

  const { wsAuthLoadingData, data} = useSelector(state => state.wsAuthOrdersUser);
  
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
              data.orders.map((order:TOrder) => <Orders key={order._id} order={order} path={'/profile/orders'}/>)
            }
          </ul> 
        }
      </div> 
  );
};