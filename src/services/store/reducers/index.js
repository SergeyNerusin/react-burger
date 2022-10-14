import { combineReducers } from 'redux';
import { allIngredinentsReducer,
         burgerConstructorReducer,
         infoIngredientReducer,
         createdOrderReducer } from './reducers';

export const rootReducer = combineReducers({
  ingredients: allIngredinentsReducer,
  burger: burgerConstructorReducer,
  ingredientInfo: infoIngredientReducer,
  order: createdOrderReducer
});


/* 
  rootReduser {
    ingredients: allIngredinentsReducer,- список всех полученных ингредиентов,
    burger: burgerConstructorReducer, - список всех ингредиентов в текущем конструкторе бургера,
    ingredientInfo: infoIngredientReducer, объект текущего просматриваемого ингредиента,
    order: createdOrderReducer - объект созданного заказа
  }
*/ 