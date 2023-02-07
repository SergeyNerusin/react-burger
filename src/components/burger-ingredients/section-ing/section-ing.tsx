import React from 'react';
import Ingredient from '../ingredient/ingredient';
import style from './section-ing.module.css';
import { TIngredientsType } from '../../../utils/type';


type TSectionIng = {
  ingredients:TIngredientsType[];
  scrollToRef: React.Ref<HTMLElement>;
  children: string;
}
const SectionIng: React.FC<TSectionIng>  = ({ingredients, scrollToRef, children}) => { 
// console.log('SectionIng', ingredients);
     
  return (
    <section className={style.section + ' mt-10'} ref={scrollToRef}>
      <h2 className='text text_type_main-medium'>{children}</h2>
      <ul className={style.items + ' mt-6'}>
        { ingredients.map(ing => <Ingredient data={ing} key={ing._id}/>) }
      </ul>
    </section>
  );
} 

export default SectionIng;

