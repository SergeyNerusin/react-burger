import React from 'react';
import styles from './feed.module.css';
// import { useSelector } from 'react-redux';
import { Orders } from '../../components/orders/orders';
import { Stats } from '../../components/stats/stats';

import { data } from '../../utils/data'; // моковые данные для отладки

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
  
  // console.log('listIngredient',listIngredients);
  // const order = data.orders[0];
  // console.log("order:", order);

  // const burg = order.ingredients.map(id => listIngredients.filter(ingr => ingr._id === id));
  //console.log(burg.reduce((sum, item) => sum + item[0].price,0));

  // const burg = order.ingredients.map(id => listIngredients.find(ingr => ingr._id === id));
  // console.log('burg:', burg);
  // console.log('price', burg.reduce((sum, item) => sum + item.price,0));
  // console.log("order.ingredients", order.ingredients);
  
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
          { 
            data.orders.map(order => <Orders key={order._id} order={order}/>)
          }
        </ul>
      </article>
      <article
      className={styles.stats}
      aria-label="Выполненные заказы и заказы в работе">
      <Stats data={data}/>
    </article>
    </div>
  );
} 