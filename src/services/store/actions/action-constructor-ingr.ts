/* для работы со списком всех ингредиентов в  конструкторе бургера */ 
import { TIngrediensConstructor } from "../../../utils/type";

export const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT';
export const ADD_BURGER_BUN = 'ADD_BURGER_BUN';
export const SORTING_BURGER_INGREDIENT = 'SORTING_BURGER_INGREDIENT';
export const DELETE_BURGER_INGREDIENT = 'DELETE_BURGER_INGREDIENT';
export const CLEAN_BURGER_INGREDIENT = 'CLEAN_BURGER_INGREDIENT';

interface IAddBurgerIngredient {
  readonly type: typeof ADD_BURGER_INGREDIENT;
  payload: TIngrediensConstructor;
}

interface IAddBurgerBun {
  readonly type: typeof ADD_BURGER_BUN;
  data: TIngrediensConstructor;
}

interface ISortingBurgerIngredient {
  readonly type: typeof SORTING_BURGER_INGREDIENT;
  sort: Array<TIngrediensConstructor>;
}

interface IDeleteBurgerIngredient {
  readonly type: typeof DELETE_BURGER_INGREDIENT;
  index: number;
}

interface IClaenBurgerIngredient {
  readonly type: typeof CLEAN_BURGER_INGREDIENT
}

export type TConstructorBurgerActions =
IAddBurgerIngredient
| IAddBurgerBun
| ISortingBurgerIngredient
| IDeleteBurgerIngredient
| IClaenBurgerIngredient

export const addBurgerBun = (item:TIngrediensConstructor):IAddBurgerBun => {
  return {
    type: ADD_BURGER_BUN, 
    data: item
  };
}

export const addBurgerIngr = (item:TIngrediensConstructor):IAddBurgerIngredient => { 
  return {
    type: ADD_BURGER_INGREDIENT, 
    payload:{...item, keyId: `${Date.now()}`}
  };
}

export const sortBurgerIngr = (ingredients: Array<TIngrediensConstructor>):ISortingBurgerIngredient => {
  return {
    type: SORTING_BURGER_INGREDIENT, 
    sort: ingredients
  };
}  

export const delBurgerIngr = (id:number):IDeleteBurgerIngredient => {
  return {
    type: DELETE_BURGER_INGREDIENT, 
    index: id 
  };
}

export const cleanBurgerConctrutor = ():IClaenBurgerIngredient => {
  return {
    type: CLEAN_BURGER_INGREDIENT
  };
}


