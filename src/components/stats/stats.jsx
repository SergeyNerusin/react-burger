import React from "react";
import styles from './stats.module.css';
import PropTypes from 'prop-types';
import { BUN_ID } from "../../utils/constant";

export const Stats = ({ data }) =>{

  /* 
      Сортировка номеров заказов по статусу, с проверкой 
      на неполные заказы (отсутствие булок или ингредиентов)
      по аналогии с функцией  useBurgerIngredients 
      в катологе: src/utils/use-burger-ingredients.js
   */
  const sorting = (name) => 
    data.orders.filter(order => {
      if (order.status === `${name}`){
         const burg_id = order.ingredients.reduce((prevVal, item) => (
        // eslint-disable-next-line
        prevVal[item] = (prevVal[item] || 0) + 1, prevVal
     ),{});
     let burgIngr = Object.keys(burg_id);
     if((burgIngr.length < 2) || (!burgIngr.some(ingr => BUN_ID.includes(ingr)))){
       return null;
     } else {
      return order;
     }
    }
    return null; 
    });

  const done = sorting('done');
  const pending = sorting('pending');  

return(
  <>
    <section className={styles.doneAndWork + ' pb-15'}>
        <div className={styles.done}>
          <h2 className='text text_type_main-medium pb-6'>Готовы:</h2>
          <ul className={styles.items_stats}>
            { 
              done.map(({number}, index) => (index < 20)? 
              <li key={number} className={styles.item_stats}>
                <span className={styles.item_text + ' text text_type_digits-default'}>
                  {number}
                </span>
              </li> : null)
            }
          </ul>
        </div>
        <div className={styles.work}>
          <h2 className='text text_type_main-medium pb-6'>В&nbsp;работе:</h2>
          <ul className={styles.items_stats}>
            {
              pending.map(({number}, index) => (index < 20)? 
              <li key={number} className={styles.item_stats + ' text text_type_digits-default'}>
                {number}
              </li> : null)
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

Stats.propTypes = {
	data: PropTypes.object.isRequired
};