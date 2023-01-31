import { useSelector } from 'react-redux';
import { BUN_ID } from './constant';

export  function useBurgerIngredients(order) {

  const listIngredients = useSelector(store => store.ingredients.data);

  if(order === null) return [];
  
  // для подсчета количества одноименных ингредиентов
  const burg_id = order.ingredients.reduce((prevVal, item) => {
    if (item) {
      prevVal[item] = (prevVal[item] || 0) + 1;
    }
    return prevVal;
  }, {});
   
  let burgIngr = Object.keys(burg_id);

  /* Проверка на минимальный состав бургера (2 булки + 1 ингредиент),
     в противном случае заказ не собран... */
  if((burgIngr.length < 2) || (!burgIngr.some(ingr => BUN_ID.includes(ingr)))) return[];

  // Порядок расположения булка первая, затем начинка
  if(!(burgIngr[0].includes(BUN_ID[0]) || burgIngr[0].includes(BUN_ID[1]))){
    burgIngr = burgIngr.reverse();
  }
   
  const burg = burgIngr.map(id => listIngredients.find(ingr => 
    ingr._id === id && ingr.type !== 'bun' ? ingr.things = burg_id[id] :
    ingr._id === id && ingr.type === 'bun' ? ingr.things = 2 : null)
  );
  
  const price = burg.reduce((sum, item) => sum + item.price * item.things,0);

  return [burg, price];
}