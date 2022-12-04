/* для работы со списком всех ингредиентов в  конструкторе бургера */ 

export const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT';
export const ADD_BURGER_BUN = 'ADD_BURGER_BUN';
export const SORTING_BURGER_INGREDIENT = 'SORTING_BURGER_INGREDIENT';
export const DELETE_BURGER_INGREDIENT = 'DELETE_BURGER_INGREDIENT';
export const CLEAN_BURGER_INGREDIENT = 'CLEAN_BURGER_INGREDIENT';


export function addBurgerBun(item) {
  return {
    type: ADD_BURGER_BUN, 
    data: item
  };
}

export function addBurgerIngr(item) { 
  return {
    type: ADD_BURGER_INGREDIENT, 
    payload:{...item, keyId: Date.now()}
  };
}

export function sortBurgerIngr(ingredients) {
  return {
    type: SORTING_BURGER_INGREDIENT, 
    sort: ingredients
  };
}  

export function delBurgerIngr(id){
  return {
    type: DELETE_BURGER_INGREDIENT, 
    index: id 
  };
}

export function cleanBurgerConctrutor(){
  return {
    type: CLEAN_BURGER_INGREDIENT
  };
}