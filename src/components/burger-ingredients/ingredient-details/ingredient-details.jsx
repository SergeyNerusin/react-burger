import style from './ingradient-details.module.css';
import {useSelector} from 'react-redux';

const IngredientDetails = () => {

  const data = useSelector(store => store.ingredientInfo.ingredient);

  return(
    <>
        <div className={style.imgContainer}>
          <img className={style.img} src={data.image_large} alt={data.name} />
        </div>
        <h3 className="text text_type_main-medium mt-4 mb-8">{data.name}</h3>
        <ul className={style.listCompound}>
          <li className={style.itemCompoundm}>
            <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
            <span className="text text_type_digits-default text_color_inactive">{data.calories}</span>
          </li>
          <li className={style.itemCompound}>
            <span className="text text_type_main-default text_color_inactive">Белки, г</span>
            <span className="text text_type_digits-default text_color_inactive">{data.proteins}</span>
          </li>
          <li className={style.itemCompound}>
            <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
            <span className="text text_type_digits-default text_color_inactive">{data.fat}</span>
          </li>
          <li className={style.itemCompound}>
            <span className="text text_type_main-default text_color_inactive">Улеводы, г</span>
            <span className="text text_type_digits-default text_color_inactive">{data.carbohydrates}</span>
          </li>
        </ul>
   </>
  );
};

export default IngredientDetails;