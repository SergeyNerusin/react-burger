import { combineReducers } from 'redux';
import { allIngredinentsReducer } from './reducer-get-ingr';
import { burgerConstructorReducer } from './reducer-constructor-ingr';
import { infoIngredientReducer } from './reducer-show-inrg-details';
import { createdOrderReducer } from './reducer-get-order';
import { userAuthReducer } from './user-auth-reducer';

export const rootReducer = combineReducers({
  ingredients: allIngredinentsReducer,
  burgerConstructor: burgerConstructorReducer,
  ingredientInfo: infoIngredientReducer,
  order: createdOrderReducer,
  userAuth: userAuthReducer 
});


/* 
  rootReduser {
    ingredients: allIngredinentsReducer,- список всех полученных ингредиентов,
    burgerConstructor: burgerConstructorReducer, - список всех ингредиентов в текущем конструкторе бургера,
    ingredientInfo: infoIngredientReducer, - данные о текущем ингредиенте для просмотра,
    order: createdOrderReducer - номер созданного заказа,
    userAuth: userAuthReducer - регистрация, авторизация пользователя, восстановление пароля 
  }
*/ 