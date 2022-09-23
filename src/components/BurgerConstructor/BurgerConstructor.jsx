import React from 'react';
import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorContext } from '../../services/BurgerConstrContext';
import PropTypes from 'prop-types';

function BurgerConstructor({openModal}) {

  const data = React.useContext(BurgerConstructorContext);
  const ingredientsId = [];
  const totalPriceIngredients = data.reduce((sum, item)=>{
    if(item.type !== 'bun'){
      ingredientsId.push(item._id);
      return sum + item.price;
    } else {
      return sum;
    }
  },0);

    return (
    <article className={style.container + ' ml-4'}>
       <div className={style.itemlock  + ' mr-4 mt-25 mb-4'}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={data[0].name + ' (верх)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <div>
        <ul className={style.fillings + ' ml-4'}>
          {data.filter((filling) => filling.type !== 'bun').map((filling) => (
            <li key={filling._id} className={style.item}>
              <span className='mr-2'>
                <DragIcon  type="primary" />
              </span>
              <ConstructorElement
                text={filling.name}
                price={filling.price}
                thumbnail={filling.image}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.itemlock + ' mr-4'}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={data[0].name + ' (низ)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <div className={style.order + ' mr-4 mt-10'}>
        <div className={style.total + ' mr-10'}>
          <p className="text text_type_digits-medium mr-2">{totalPriceIngredients + data[0].price*2}</p> 
          <CurrencyIcon type="primary" /> 
        </div>
          <Button type="primary" size="large" onClick={()=>openModal(ingredientsId)}> 
            Оформить заказ
          </Button>
      </div>
     </article>
  )
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default BurgerConstructor