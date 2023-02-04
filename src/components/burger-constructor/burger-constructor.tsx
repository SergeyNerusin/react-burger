import React from 'react';
import style from './burger-constructor.module.css';
import { ConstructorElement, 
         Button, 
         CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSelector, useDispatch } from 'react-redux';

import { addBurgerBun, 
         addBurgerIngr, 
         sortBurgerIngr } from '../../services/store/actions/action-constructor-ingr';
import { useDrop } from 'react-dnd';
import { ItemConstructor } from './item-consstructor/item-constructor';
import { TIngrediensConstructor } from '../../utils/type';

type TfuncModal = {
  openModal: () => void;
};

type TmoveIngr = (dragIndex:number, hoverIndex:number) => void; 

const BurgerConstructor: React.FC<TfuncModal> = ({openModal}) => {

  const dispatch = useDispatch();
  const {bun, ingredients} = useSelector(store => store.burgerConstructor);
  
  const [{isOver}, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item: TIngrediensConstructor) {
      dispatch(item.type === 'bun' ? addBurgerBun(item) : (addBurgerIngr(item)));
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  const totalOrder = React.useMemo(() => { 
    return ((bun === null || ingredients === null) ? 0 
    : bun.price*2 + ingredients.reduce((sum:number, item: TIngrediensConstructor) => sum + item.price,0));
  },[bun, ingredients]);

  const moveIngr = React.useCallback<TmoveIngr>((dragIndex, hoverIndex) => {
    const dragItem = ingredients[dragIndex];
    const hoverItem = ingredients[hoverIndex];
    const mixIngredients = [...ingredients];
    mixIngredients[dragIndex] = hoverItem;
    mixIngredients[hoverIndex] = dragItem;
    dispatch(sortBurgerIngr(mixIngredients));
  // eslint-disable-next-line
  },[ingredients]);

  return ( 
    <div ref={dropRef} 
         className={isOver ? `${style.container} ${style.bordercolor} mt-25` 
         : `${style.container}  mt-25`}>
      <article className={style.constructor} aria-label="Бургер конструктор">
        {!!bun ?
        <div className={style.itemlock + ' mr-4 mt-0 mb-4'}>
          <ConstructorElement
            type='top'
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
        {!!ingredients ?
        <div>
          <ul className={style.fillings + ' ml-4'}>
            {ingredients.map((ingr:TIngrediensConstructor, index:number) => (
              <ItemConstructor ingredient={ingr} index={index} key={ingr.keyId} moveIngr={moveIngr}/>
            ))}
          </ul>
        </div>
        :
        <div className={`${style.drop} mb-4`}>
          <h2 className={`${style.title}`}>Выберете и перетащите начинку</h2>
        </div>
        }
        { !!bun &&
          <div className={style.itemlock + ' mr-4'}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        }
        { !!bun && !!ingredients ?
          <div className={style.order + ' mr-4 mt-10'}>
          <div className={style.total + ' mr-10'}>
            <p className='text text_type_digits-medium mr-2'>{totalOrder}</p> 
            <CurrencyIcon type='primary' /> 
          </div>
            <Button htmlType='button' type='primary' size='large' onClick={openModal}> 
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


export default BurgerConstructor