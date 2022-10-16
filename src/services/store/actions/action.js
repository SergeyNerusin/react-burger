/* для получения списка ингредиентов */ 
import { fetchDataIngredients, fetchGetOrderNumber } from '../../../utils/burger-api';

export const GET_INGR_REQUEST = 'GET_INGR_REQUEST'; // экшн получить ингредиенты 
export const GET_INGR_SUCCESS = 'GET_INGR_SUCCESS'; 
export const GET_INGR_ERR = 'GET_INGR_ERR';

export function getIngr() {
 return function(dispatch){
  dispatch({
    type: GET_INGR_REQUEST 
  });

  fetchDataIngredients()
  .then(res => {
    if(res && res.success){
    dispatch({
      type: GET_INGR_SUCCESS,
      data: res.data
    });
    } else {
      dispatch({
      type: GET_INGR_ERR
    });
    }
  }); 
 
 };
};

/* для данных о текущем ингредиенте для просмотра модальном окне */ 

export const ADD_INGR_DETAILS = 'ADD_INGR_DETAILS';
export const DEL_INGR_DETAILS = 'DEL_INGR_DETAILS';

export function showIngrDetails(data){
  return {
    type: ADD_INGR_DETAILS,
    ingr: data
  };
}

export function delIngrDetails(){
  return {
    type: DEL_INGR_DETAILS
  };
}

/* для получения номера заказа  */ 
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERR = 'GET_ORDER_ERR';

export function getOreder(ingredientsId){
  return function(dispatch){
    dispatch({
      type: GET_ORDER_REQUEST
    });
    fetchGetOrderNumber(ingredientsId)
    .then(res => { 
        if(res && res.success){
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res.order.number
          });
      } else {
          dispatch({
            type: GET_ORDER_ERR
          });
        }
    });
  };
}

/* для работы со списком всех ингредиентов в  конструкторе бургера */ 

export const ADD_BURGER_INGR = 'ADD_BURGER_ING';
export const ADD_BURGER_BUN = 'ADD_BURGER_BUN';
export const SORT_BURGER_INGR = 'SORTING_BURGER_INGR';
export const DEL_BURGER_INGR = 'DEL_BURGER_ING';


export function addBurgerBun(item) {
  return {
    type: ADD_BURGER_BUN, 
    data: item
  };
}

export function addBurgerIngr(item) { 
  return {
    type: ADD_BURGER_INGR, 
    data: item, 
    keyId: Date.now()
  };
}

export function sortBurgerIngr(ingredients) {
  return {
    type: SORT_BURGER_INGR, 
    sort: ingredients
  };
}  

export function delBurgerIngr(id){
  return {
    type: DEL_BURGER_INGR, 
    index: id 
  };
}


