/* для получения детальной информации о заказанном бургере  */ 
import { fetchOrderInfo } from '../../../utils/burger-api';

export const GET_ORDERINFO_REQUEST = 'GET_ORDERINFO_REQUEST'; 
export const GET_ORDERINFO_SUCCESS = 'GET_ORDERINFO_SUCCESS'; 
export const GET_ORDERINFO_ERRОR = 'GET_ORDERINFO_ERRОR';
export const CLEAN_ORDERINFO = 'CLEAN_ORDERINFO';
import { AppDispatch, AppThunk } from '../types-store';
import { TOrder } from '../../../utils/type';

interface IGetOrderInfoRequest {
  readonly type: typeof GET_ORDERINFO_REQUEST;
}

interface IGetOrderInfoSuccess {
  readonly type: typeof GET_ORDERINFO_SUCCESS;
  payload: TOrder;
}

interface IGetOrderInfoError {
  readonly type: typeof GET_ORDERINFO_ERRОR;
}

interface ICleanOrderInfo {
  readonly type: typeof CLEAN_ORDERINFO;
}

export type TOrderInfoActions =
IGetOrderInfoRequest
| IGetOrderInfoSuccess
| IGetOrderInfoError
| ICleanOrderInfo

export const getOrderInfo: AppThunk = (number: number) => {
 return function(dispatch: AppDispatch){
  dispatch({
    type: GET_ORDERINFO_REQUEST 
  });

  fetchOrderInfo(number)
  .then(res => {
    if(res && res.success){
    console.log('fetchOrderInfo res', res, res.orders[0]);
    dispatch({
      type: GET_ORDERINFO_SUCCESS,
      payload: res.orders[0]
    });
    } else {
      dispatch({
      type: GET_ORDERINFO_ERRОR
    });
    }
  })
  .catch((res) => { 
    dispatch({ 
    type: GET_ORDERINFO_ERRОR 
  });
  console.log('fetchOrderInfo', res);
 });
 };
}

export const orderInfoClean = ():ICleanOrderInfo => {
  return {
    type: 'CLEAN_ORDERINFO'
  };
} 