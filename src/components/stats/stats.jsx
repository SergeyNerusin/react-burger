import React from "react";
import styles from './stats.module.css';

export const Stats = ({ data }) =>{

  const sorting = (name) => 
    data.orders.filter(order =>  order.status === `${name}`);

  const done = sorting('done');
  const pending = sorting('pending');  

return(
  <>
    <section className={styles.doneAndWork + ' pb-15'}>
        <div className={styles.done}>
          <h2 className='text text_type_main-medium pb-6'>Готовы:</h2>
          <ul className={styles.items_stats}>
            { 
              done.map((order, index) => (index < 10)? 
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
              pending.map((order, index) => (index < 10)? 
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
  </>
);
};