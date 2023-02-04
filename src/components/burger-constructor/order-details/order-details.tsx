import React from 'react';
import styles from './order-details.module.css';
import takeInWork from '../../../images/done.jpg';

type TOrderNumber = {
  orderNumber: number;
}

const OrderDetails: React.FC<TOrderNumber> = ({orderNumber}) => {
  
return (
    <>
    <div className={styles.wrapper + ' mb-8'}>
      { orderNumber === 0 ? <h2 className={'text text_type_main-large'}>Запрос номера...</h2>
      :
      <h2 className='text text_type_digits-large'>{orderNumber}</h2>}
    </div>
      <span className='text text_type_main-medium mb-15'>идентификатор заказа</span>
      <div className={styles.imgcontainer + ' mb-15'}>
         <img className={styles.img} src={takeInWork} alt='Готовим заказ'/>
      </div>
      <span className='text text_type_main-default mb-2'>Ваш заказ начали готовить</span>
      <span className='text text_type_main-default text_color_inactive mb-15'>Дождитесь готовности на орбитальной станции</span>
    </>
  );
}


export default OrderDetails; 