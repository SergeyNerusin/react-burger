import {ADD_BURGER_INGR,
        ADD_BURGER_BUN,
        SORT_BURGER_INGR,
        DEL_BURGER_INGR } from '../actions/action-constructor-ingr';


/* для списка выбранных ингредиентов в конструкторе бургера */ 
const initialBurgerState = {
  ingredients: [],
  bun: null
};

export const burgerConstructorReducer = (state = initialBurgerState, action) => {
  switch(action.type){
    case ADD_BURGER_INGR:{
      return{
        ...state,
        ingredients: [...state.ingredients,{...action.data, keyId: action.keyId}]
      };
    } 

    case ADD_BURGER_BUN: {
      return{
        ...state,
        bun: action.data
      };
    }

    case SORT_BURGER_INGR: {
        return {
         ...state,
         ingredients: action.sort 
        };   
    }
    
    case DEL_BURGER_INGR: {
       return {
        ...state,
        ingredients: state.ingredients.filter((ingr, index) => index !== action.index)
       };
    }

    default: {
      return state;
    }
  }
};