/* для получения номера заказа  */ 
import { fetchGetOrderNumber } from '../../../utils/burger-api';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERR';
export const CLEAN_ORDER_NUMBER = 'CLEAN_ORDER_NUMBER';
import { AppThunk, AppDispatch } from '../types-store';


interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}

interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  order: number;
}

interface IGetOrderError {
  readonly type: typeof GET_ORDER_ERROR;
}

interface ICleanOrderNumber {
  readonly type: typeof CLEAN_ORDER_NUMBER;
}

export type TGetOrderActions =
IGetOrderRequest 
| IGetOrderSuccess
| IGetOrderError
| ICleanOrderNumber

export const getOreder: AppThunk = (ingredientsId: string[])=>{
  return function(dispatch: AppDispatch){
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
    })
    .catch(() =>  dispatch({
            type: GET_ORDER_ERROR
          }));
  };
}

export const cleanOrder = ():ICleanOrderNumber => {
  return {
    type: CLEAN_ORDER_NUMBER
  };
}