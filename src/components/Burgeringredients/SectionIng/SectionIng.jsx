import Ingredient from '../../Ingredient/Ingredient';
import style from './SectionIng.module.css';

const SectionIng = ({data, typeIng, ...props}) => {
  return (
    <section className='mt-10'>
      <h2 className='text text_type_main-medium'>{props.children}</h2>
      <ul className={style.list + 'mt-6'}>
        { data.filter(ing => ing.type === `${typeIng}`).map(ing => <Ingredient data={ing} key={ing._id}/>) }
      </ul>
    </section>
  );
} 

export default SectionIng;