import React from 'react';
import style from '../item-consstructor/item-constructor.module.css';
import { TIngredientsType, TIngrediensConstructor } from '../../../utils/type';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {delBurgerIngr} from '../../../services/store/actions/action-constructor-ingr';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import {useDispatch} from '../../../hooks/redux-hoks';
import {useRef} from 'react';

type TItemConstructor = {
  ingredient: TIngredientsType;
  index: number;
  moveIngr: (dragIndex:number, hoverIndex:number) => void;
};

type Tdrop = TIngrediensConstructor & {
  index: number;
}

export const ItemConstructor: React.FC<TItemConstructor> = ({ingredient, index, moveIngr}) => {
  const dispatch = useDispatch();
  const refItem = useRef<HTMLLIElement>(null);

  const [{isDragging}, dragRef] = useDrag({
    type: 'item',
    item: {index},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, drop] = useDrop({
    accept: 'item',
    hover: (item:Tdrop, monitor:DropTargetMonitor) => {
      if (!refItem.current) return;
      const dragIndex = item.index;
      const hoverIndex = index; 

      if (dragIndex === hoverIndex) return;

      const hoverItemRect = refItem.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverItemRect.bottom - hoverItemRect.top) / 2;
      const hoverActualY = Number(monitor.getClientOffset())  - hoverItemRect.top;
      console.log("item-constructor:", monitor.getClientOffset());

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveIngr(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  dragRef(drop(refItem));
  
  const HandleDelItem = () => {dispatch(delBurgerIngr(index))};

  return (
    <li className={isDragging ? `${style.item} ${style.item_hover} pr-2` : `${style.item} pr-2`} ref={refItem}>
      <div className={style.icon}>
        <span className='mr-2'>
          <DragIcon type='primary' />
        </span>
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => HandleDelItem()}
      />
    </li>
  )
}



