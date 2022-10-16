import style from '../item-consstructor/item-constructor.module.css';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {delBurgerIngr} from '../../../services/store/actions/action-constructor-ingr';
import { useDrag, useDrop } from 'react-dnd';
import {useDispatch} from 'react-redux';
import {useRef} from 'react';

export default function ItemConstructor({ing, index, moveIngr}) {
  const dispatch = useDispatch();
  const refItem = useRef(null);

  const [{isDragging}, dragRef] = useDrag({
    type: 'item',
    item: {index},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, drop] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      if (!refItem.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverItemRect = refItem.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverItemRect.bottom - hoverItemRect.top) / 2;
      const hoverActualY = monitor.getClientOffset() - hoverItemRect.top;

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
          <DragIcon type="primary" />
        </span>
      </div>
      <ConstructorElement
        text={ing.name}
        price={ing.price}
        thumbnail={ing.image}
        handleClose={() => HandleDelItem()}
      />
    </li>
  )
}

