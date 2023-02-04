import React, {useEffect} from 'react';
import styles from './feed.module.css';
import { Orders } from '../../components/orders/orders';
import { Stats } from '../../components/stats/stats';
import { useSelector, useDispatch } from 'react-redux';
import {  wsConnectionInit, wsConnectionClose } from '../../services/store/actions/action-ws-order-all'; 
import { TOrder } from '../../utils/type';


const Feed: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(wsConnectionInit());
    return () => {
      dispatch(wsConnectionClose());
    };
  },[dispatch]);
  
  const  data = useSelector(state => state.wsOrdersAll.data);
  // console.log('feed data:', data);
   
  return (
  <>
    {!!data && (
    <div className={styles.container + ' mt-10'}>
      <article className={styles.orderFeed} 
               aria-label="Лента заказов">
        <h1 className='text text_type_main-large mb-6'>Лента заказов</h1>
        <ul className={styles.orders}>
          { 
            data.orders.map((order: TOrder) => <Orders key={order._id} order={order} path={'/feed'}/>)
          }
        </ul>
      </article>
      <article
      className={styles.stats}
      aria-label="Выполненные заказы и заказы в работе">
      <Stats data={data}/>
    </article>
    </div> )}
  </>
  );
} 

export default Feed;