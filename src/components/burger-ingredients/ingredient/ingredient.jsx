import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import style from './ingredient.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { showIngrDetails } from '../../../services/store/actions/action-show-ingr-details';
import { useDrag } from 'react-dnd';

function Ingredient({data}) {  
  const {ingredients} = useSelector(store => store.burger);
  const {bun} = useSelector(store => store.burger);
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: data,
  });
  const dispatch = useDispatch();
  const handleItemData = () => {
     dispatch(showIngrDetails(data));
  }; 

  const setCounter = () => {
    if (data.type !== 'bun') {
      return ingredients.filter((item) => item._id === data._id).length;
    } else if (bun?._id === data._id) {
      return 2;
    } else return 0;
  };

  const counter = setCounter();
  
  return (
    <li className={style.ingredient} ref={dragRef} onClick={handleItemData}>
      {counter !==0 ? <Counter count={counter} size="default"/> : <></>}
      <img src={data.image} alt={data.name} className={style.image + ' pr-4 pl-4'}/>
      <div className={style.price + ' mt-1 pr-4 pl-4'}>
        <p className='text text_type_digits-default'>{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default mt-1">{data.name}</p>
    </li>
  )
}

Ingredient.propTypes = {
  data: PropTypes.object.isRequired,
 
};

export default Ingredient
