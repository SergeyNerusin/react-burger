/* для получения номера заказа  */ 
import { fetchGetOrderNumber } from '../../../utils/burger-api';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERR';
export const CLEAN_ORDER_NUMBER = 'CLEAN_ORDER_NUMBER';

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
            type: GET_ORDER_ERROR
          });
        }
    });
  };
}

export function cleanOrder(){
  return {
    type: CLEAN_ORDER_NUMBER
  };
}