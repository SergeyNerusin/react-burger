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
    ingredients: - список всех полученных ингредиентов,
    burger: - список всех ингредиентов в текущем конструкторе бургера,
    ingredientInfo:  объект текущего просматриваемого ингредиента,
    order: объект созданного заказа
  }
*/ 