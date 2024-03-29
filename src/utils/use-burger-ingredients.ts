import { useSelector } from '../hooks/redux-hoks';
import { BUN_ID } from './constant';
import { TOrder, TIngredientsType, TObject } from './type';


export const useBurgerIngredients = 
(order:TOrder | null | undefined):[ Array<TIngredientsType | undefined> | null, number | null]=> {

  const listIngredients = useSelector(store => store.ingredients.data);
   
  if((order === null) || (order === undefined) || (listIngredients === null)) return [null, null];
  
  // для подсчета количества одноименных ингредиентов
  const burg_id = order.ingredients.reduce((prevVal:TObject, item:string) => {
    if (item) {
      prevVal[item] = (prevVal[item] || 0) + 1;

    }
    return prevVal;
  }, {});
  
  let burgIngr = Object.keys(burg_id);

  /* Проверка на минимальный состав бургера (2 булки + 1 ингредиент),
     в противном случае заказ не собран... */
  if((burgIngr.length < 2) || (!burgIngr.some(ingr => BUN_ID.includes(ingr)))) return[null, null];

  // Порядок расположения булка первая, затем начинка
  if(!(burgIngr[0].includes(BUN_ID[0]) || burgIngr[0].includes(BUN_ID[1]))){
    burgIngr = burgIngr.reverse();
  }
   
  const burg:Array<TIngredientsType | undefined> = burgIngr.map(id => listIngredients.find(ingr => 
    ingr._id === id && ingr.type !== 'bun' ? ingr.things = burg_id[id] :
    ingr._id === id && ingr.type === 'bun' ? ingr.things = 2 : null)
  );
  
  const price = burg.reduce((sum: number, item) =>{
     if(item?.things){ return sum + item.price * item.things }
     return sum
    },0);
  
    return [burg, price];
}

