import { combineReducers } from 'redux';
import { allIngredinentsReducer } from './reducer-get-ing';
import { burgerConstructorReducer } from './reducer-constructor-ingr';
import { infoIngredientReducer } from './reducer-show-inrg-details';
import { createdOrderReducer } from './reducer-get-order';

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
    ingredientInfo: infoIngredientReducer, данные о текущем ингредиенте для просмотра,
    order: createdOrderReducer - объект созданного заказа
  }
*/ 