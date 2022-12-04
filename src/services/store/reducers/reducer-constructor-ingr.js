import { ADD_BURGER_INGREDIENT,
         ADD_BURGER_BUN,
         SORTING_BURGER_INGREDIENT,
         DELETE_BURGER_INGREDIENT,
         CLEAN_BURGER_INGREDIENT } from '../actions/action-constructor-ingr';


/* для списка выбранных ингредиентов в конструкторе бургера */ 
const initialBurgerState = {
  ingredients: null,
  bun: null
};

export const burgerConstructorReducer = (state = initialBurgerState, action) => {
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
        ingredients: state.ingredients.filter((ingr, index) => index !== action.index)
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