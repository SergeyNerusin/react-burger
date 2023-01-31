import React, { useEffect } from 'react';
import styles from './order-info.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux'; 
import { useParams, useRouteMatch } from "react-router-dom";
import { useBurgerIngredients } from '../../utils/use-burger-ingredients';
import { getOrderInfo, orderInfoClean } from '../../services/store/actions/action-order-info';
import { wsAuthConnectionInit, wsAuthConnectionClose } from '../../services/store/actions/action-ws-auth';

export const OrderInfo = () => {
  
  const { id } = useParams();
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  
  const isFeed = (path === '/feed/:id');
  const isProfile = (path === '/profile/orders/:id');
  
  useEffect(() => {
    isFeed && dispatch(getOrderInfo(Number(id)));
    isProfile && dispatch(wsAuthConnectionInit());
    
    return () => {
      isFeed && dispatch(orderInfoClean());
      isProfile && dispatch(wsAuthConnectionClose());
    };
  },[id, isFeed, isProfile, dispatch]);

  const dataOrdersAll  = useSelector(state => state.wsOrdersAll.data);  
  const dataOrdersUser = useSelector(state => state.wsAuthOrdersUser.data);
  const data = (isFeed && dataOrdersAll) || (isProfile && dataOrdersUser);
  const orderinfo = useSelector(state => state.orderInfo.order);
  const order = !!data ? data.orders.find(order => order.number === Number(id)) : orderinfo;
  
  console.log({
   'id': id,
   'path:': path,
   'isFeed':isFeed,
   'isProfile': isProfile,
   'data': data,
   'dataOrdersAll': dataOrdersAll,
   'dataOrdersUser': dataOrdersUser,
   'orderInfo': orderinfo,
 });
 
  const [burg, price] = useBurgerIngredients(order);

  return !!burg && (
  <article className={styles.container}>
    <p className={styles.number + ' text text_type_digits-default mb-10'}>#{order.number}</p>
    <h2 className='text text_type_main-medium mb-3'>{order.name}</h2>
    <p className={styles.status + ' text text_type_main-default mb-15'}>
      {order.status === 'done' ? 'Выполнен' : order.status === 'pending' ? 'Готовится' : 'Отменён'}
    </p>
    <p className='text text_type_main-medium mb-6'>Состав:</p>
    <div className={styles.info_container + ' mb-10 '}>
      <ul className={styles.info_wrapper + ' mr-6'}>
          { burg.map(ingr => 
             ( <li key={ingr._id} className={styles.item}>
                  <img className={styles.img} src={ingr.image} alt={ingr.name}/>
                  <h2 className={styles.title + ' text text_type_main-default'}>{ingr.name}</h2>
                  <div className={styles.item_price}>
                    <span className='text text_type_digits-default'>{ingr.things}</span>
                    <span className='text text_type_main-default'>x</span>
                    <span className='text text_type_digits-default'>{ingr.price}</span>
                    <CurrencyIcon/>
                  </div>
                </li>
              )
            )
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
  </article>);
};  