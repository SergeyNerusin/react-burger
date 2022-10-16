/* для работы со списком всех ингредиентов в  конструкторе бургера */ 

export const ADD_BURGER_INGR = 'ADD_BURGER_ING';
export const ADD_BURGER_BUN = 'ADD_BURGER_BUN';
export const SORT_BURGER_INGR = 'SORTING_BURGER_INGR';
export const DEL_BURGER_INGR = 'DEL_BURGER_ING';


export function addBurgerBun(item) {
  return {
    type: ADD_BURGER_BUN, 
    data: item
  };
}

export function addBurgerIngr(item) { 
  return {
    type: ADD_BURGER_INGR, 
    data: item, 
    keyId: Date.now()
  };
}

export function sortBurgerIngr(ingredients) {
  return {
    type: SORT_BURGER_INGR, 
    sort: ingredients
  };
}  

export function delBurgerIngr(id){
  return {
    type: DEL_BURGER_INGR, 
    index: id 
  };
}