import { combineReducers } from 'redux';
import { allIngredinentsReducer } from './reducer-get-ingr';
import { burgerConstructorReducer } from './reducer-constructor-ingr';
import { createdOrderReducer } from './reducer-get-order';
import { userAuthReducer } from './reducer-auth-user';
import { orderInfoReducer} from './reducer-order-info';
import { wsOrderAllReducer } from './reducer-ws-order-all';
import { wsAuthOrdersUserReducer } from './reducer-ws-auth';


export const rootReducer = combineReducers({
  ingredients: allIngredinentsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: createdOrderReducer,
  userAuth: userAuthReducer,
  orderInfo: orderInfoReducer,
  wsOrderAll: wsOrderAllReducer,
  wsAuthOrdersUser: wsAuthOrdersUserReducer  
});


/* 
  rootReduser {
    ingredients: allIngredinentsReducer,- список всех полученных ингредиентов,
    burgerConstructor: burgerConstructorReducer, - список всех ингредиентов в текущем конструкторе бургера,
    order: createdOrderReducer - номер созданного заказа,
    userAuth: userAuthReducer - регистрация, авторизация пользователя, восстановление пароля,
    orderInfo: orderInfoReduser - информация о составе бургера сделанного ранее заказа,  
    wsOrderAll: wsOrderAllReducer - получение данных обо всех сделанных заказах через вебсокет,
    wsAuthOrdersUser: wsAuthOrdersUserReducer - информация о заказах сделанных пользователем 
  }
*/ 