/* для получения детальной информации о заказанном бургере  */ 
import { fetchOrderInfo } from '../../../utils/burger-api';
import { AppDispatch, AppThunk  } from '../types-store';
import { TOrder } from '../../../utils/type';

export const GET_ORDERINFO_REQUEST = 'GET_ORDERINFO_REQUEST'; 
export const GET_ORDERINFO_SUCCESS = 'GET_ORDERINFO_SUCCESS'; 
export const GET_ORDERINFO_ERRОR = 'GET_ORDERINFO_ERRОR';
export const CLEAN_ORDERINFO = 'CLEAN_ORDERINFO';

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
  .catch(() => { 
    dispatch({ 
    type: GET_ORDERINFO_ERRОR 
  });
  });
 };
}

export const orderInfoClean = ():ICleanOrderInfo => {
  return {
    type: 'CLEAN_ORDERINFO'
  };
} 