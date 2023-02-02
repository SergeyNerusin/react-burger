import React from 'react';
import styles from './ingradient-details.module.css';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

const IngredientDetails: React.FC = () => {
  const { id } = useParams<{id:string}>();
  
  const ingredients = useSelector(store => store.ingredients.data);
  
  const data = ingredients.find(ingr => ingr._id === id);
  
return (
    <>
    { !!data && (
     <>
        <div className={styles.imgContainer}>
         <img className={styles.img} src={data.image_large} alt={data.name} />
        </div>
        <h3 className='text text_type_main-medium mt-4 mb-8'>{data.name}</h3>
        <ul className={styles.listCompound}>
          <li className={styles.itemCompoundm}>
            <span className='text text_type_main-default text_color_inactive'>Калории,ккал</span>
            <span className='text text_type_digits-default text_color_inactive'>{data.calories}</span>
          </li>
          <li className={styles.itemCompound}>
            <span className='text text_type_main-default text_color_inactive'>Белки, г</span>
            <span className='text text_type_digits-default text_color_inactive'>{data.proteins}</span>
          </li>
          <li className={styles.itemCompound}>
            <span className='text text_type_main-default text_color_inactive'>Жиры, г</span>
            <span className='text text_type_digits-default text_color_inactive'>{data.fat}</span>
          </li>
          <li className={styles.itemCompound}>
            <span className='text text_type_main-default text_color_inactive'>Улеводы, г</span>
            <span className='text text_type_digits-default text_color_inactive'>{data.carbohydrates}</span>
          </li>
        </ul>
     </>
     )} 
   </>
  );
};

export default IngredientDetails;