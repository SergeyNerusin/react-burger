import { TIngrediensConstructor } from '../../../utils/type';
import { ADD_BURGER_INGREDIENT,
         ADD_BURGER_BUN,
         SORTING_BURGER_INGREDIENT,
         DELETE_BURGER_INGREDIENT,
         CLEAN_BURGER_INGREDIENT,
         TConstructorBurgerActions } from '../actions/action-constructor-ingr';


/* для списка выбранных ингредиентов в конструкторе бургера */ 
type TBurgerState = {
  ingredients: null | TIngrediensConstructor[];
  bun: null | TIngrediensConstructor;
}

const initialBurgerState:TBurgerState = {
  ingredients: null,
  bun: null
};

export const burgerConstructorReducer = (state = initialBurgerState, action:TConstructorBurgerActions):TBurgerState => {
  switch(action.type){
    case ADD_BURGER_INGREDIENT:
      return{
        ...state,
        ingredients: (state.ingredients === null) ? [{...action.payload}] : [...state.ingredients,{...action.payload}]
      };
     

    case ADD_BURGER_BUN: 
      return{
        ...state,
        bun: action.data
      };
    

    case SORTING_BURGER_INGREDIENT: 
        return {
         ...state,
         ingredients: action.sort 
        };   
    
    
    case DELETE_BURGER_INGREDIENT: 
       return {
        ...state,
        ingredients: (state.ingredients !== null)? state.ingredients.filter((ingr:TIngrediensConstructor, index:number) => index !== action.index) : null,
       };

    case CLEAN_BURGER_INGREDIENT:
      return { 
        ...state,
        ingredients: null,
        bun: null
      }   
    

    default: 
      return state;
    
  }
};