import React from 'react';
import style from './burger-constructor.module.css';
import {ConstructorElement, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { addBurgerBun, addBurgerIngr, sortBurgerIngr } from '../../services/store/actions/action-constructor-ingr';
import { useDrop } from 'react-dnd';
import ItemConstructor from './item-consstructor/item-constructor';

function BurgerConstructor({openModal}) {

  const dispatch = useDispatch();
  const {bun} = useSelector(store => store.burgerConstructor);
  const {ingredients} = useSelector(store => store.burgerConstructor); 

  const [{isOver}, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      dispatch(item.type === 'bun' ? addBurgerBun(item) : (addBurgerIngr(item)));
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  const totalOrder = React.useMemo(() => { 
    return ((ingredients.length > 0) && bun.price*2 + ingredients.reduce((sum, item)=> sum + item.price,0));
  },[bun, ingredients]);

  const moveIngr = React.useCallback ((dragIndex, hoverIndex) => {
    const dragItem = ingredients[dragIndex];
    const hoverItem = ingredients[hoverIndex];
    const mixIngredients = [...ingredients];
    mixIngredients[dragIndex] = hoverItem;
    mixIngredients[hoverIndex] = dragItem;
    dispatch(sortBurgerIngr(mixIngredients));
  // eslint-disable-next-line
  },[ingredients]);

  return ( 
    <div ref={dropRef} className={isOver ? `${style.container} ${style.bordercolor} mt-25` : `${style.container } mt-25`}>
      <article className={style.constructor}>
        {bun ?
        <div className={style.itemlock + ' mr-4 mt-0 mb-4'}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        :
        <div className={`${style.drop}`}>
            <h2 className={`${style.title}`}>Выберете и перетащите булку</h2>
        </div>
        }
        { bun && ingredients.length > 0 ?
        <div>
          <ul className={style.fillings + ' ml-4'}>
            {ingredients.map((ingr, index) => (
              <ItemConstructor ing={ingr} index={index} key={ingr.keyId} moveIngr={moveIngr}/>
            ))}
          </ul>
        </div>
        :
        <div className={`${style.drop} mb-4`}>
          <h2 className={`${style.title}`}>Выберете и перетащите начинку</h2>
        </div>
        }
        { bun &&
          <div className={style.itemlock + ' mr-4'}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        }
        { bun && ingredients.length > 0 ?
          <div className={style.order + ' mr-4 mt-10'}>
          <div className={style.total + ' mr-10'}>
            <p className="text text_type_digits-medium mr-2">{totalOrder}</p> 
            <CurrencyIcon type="primary" /> 
          </div>
            <Button type="primary" size="large" onClick={openModal}> 
              Оформить заказ
            </Button>
        </div>
        :
        <></>
        }
      </article>
    </div> 
  )
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default BurgerConstructor