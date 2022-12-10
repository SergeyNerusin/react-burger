import React from 'react';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './feed.module.css';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { data } from '../../utils/data';

export default function Feed(){

/*подключиться к бэкенду для получения всех заказов
const ws = new WebSocket('wss://norma.nomoreparties.space/orders/all');
console.log('1:readyState', ws.readyState); 

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
    console.log(data);
}; 

 useEffect(() => {
    return () => {
      if (typeof ws.close === 'function') {
        ws.close();
        console.log('2:readyState', ws.readyState); 
      }
    };
  }, 
  // eslint-disable-next-line 
  []);*/ 
  const listIngredients = useSelector(store => store.ingredients.data);
  // console.log('listIngredient',listIngredients);
  // const order = data.orders[0];
  // console.log("order:", order);
  // const burg = order.ingredients.map(id => listIngredients.filter(ingr => ingr._id === id));
  // console.log('burg:', burg);
  // console.log(burg.reduce((sum, item) => sum + item[0].price,0));
  // console.log("order.ingredients", order.ingredients);

  const sorting = (name) => 
    data.orders.filter(order =>  order.status === `${name}`);
           
  
  // const done = sorting('done');
  // console.log('done', done);
  // const pending = sorting('pending');
  // console.log('pending', pending);
  
  return (
    <div className={styles.container + ' mt-10'}>
      <article className={styles.orderFeed} 
               aria-label="Лента заказов">
        <h1 className='text text_type_main-large mb-6'>Лента заказов</h1>
        <ul className={styles.orders}>
          { data.orders.map(order => (
            <li key={order._id} className={styles.order + ' p-6'}>
              <div className={styles.bar_numberOrder_time}>
                <span className='text text_type_digits-default'>{`#${order.number}`}</span>
                <FormattedDate className='text text_type_main-default text_color_inactive' 
                               date={new Date(order.createdAt)}/>
              </div>
              <h2 className='text text_type_main-medium'>{order.name}</h2>
              <div className={styles.wrapper}>
                <ul className={styles.img_container}>
                  { order.ingredients.map(id => listIngredients.map((ingr, index) => 
                      ingr._id === id ? (
                      <li key={`${Number(ingr._id) + index}`} className={styles.item}>
                        <img className={styles.img} src={ingr.image} alt={ingr.name}/>
                      </li>) : <></>))
                  }
                </ul>
                <ul className={styles.totalsumm}>
                  <li className='text text_type_digits-default pr-2'>
                    {
                      order.ingredients.map(id => listIngredients.filter(ingr => ingr._id === id)).reduce((sum, item) => sum + item[0].price,0)
                    }
                  </li>
                  <li>
                    <CurrencyIcon type='primary' />
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <article
      className={styles.stats}
      aria-label="Выполненные заказы и заказы в работе">
      <section className={styles.doneAndWork + ' pb-15'}>
        <div className={styles.done}>
          <h2 className='text text_type_main-medium pb-6'>Готовы:</h2>
          <ul className={styles.items_stats}>
            { 
              sorting('done').map((order, index) => (index < 10)? 
              (<li key={order.number} className={styles.item_stats + ' text text_type_digits-default'}>
                {order.number}
              </li>):<></>)
            }
          </ul>
        </div>
        <div className={styles.work}>
          <h2 className='text text_type_main-medium pb-6'>В&nbsp;работе:</h2>
          <ul className={styles.items_stats}>
            {
              sorting('pending').map((order, index) => (index < 10)? 
              (<li key={order.number} className={styles.item_stats + ' text text_type_digits-default'}>
                {order.number}
              </li>):<></>)
            }
          </ul>
        </div>
      </section>
      <section className={styles.total}>
        <div className=' pb-15'>
          <h2 className='text text_type_main-medium'>Выполнено за всё время:</h2>
          <span className='text text_type_digits-large'>{data.total}</span>
        </div>
        <div>
          <h2 className='text text_type_main-medium'>Выполнено за сегодня:</h2>
          <span className='text text_type_digits-large'>{data.totalToday}</span>
        </div>
      </section>
    </article>
    </div>
  );
} 