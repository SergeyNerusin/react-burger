/* для получения детальной информации о заказанном бургере  */ 
import { fetchOrderInfo } from '../../../utils/burger-api';

export const GET_ORDERINFO_REQUEST = 'GET_ORDERINFO_REQUEST'; // экшн получить инфо о составе заказанного ранее бургера
export const GET_ORDERINFO_SUCCESS = 'GET_ORDERINFO_SUCCESS'; 
export const GET_ORDERINFO_ERRОR = 'GET_ORDERINFO_ERRОR';
export const CLEAN_ORDERINFO = 'CLEAN_ORDERINFO';

export function getOrderInfo(number) {
 return function(dispatch){
  dispatch({
    type: GET_ORDERINFO_REQUEST 
  });

  fetchOrderInfo(number)
  .then(res => {
    if(res && res.success){
      console.log('fetchOrderInfo res.orders', res.orders[0]);
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

export function orderInfoClean(){
  return {
    type: 'CLEAN_ORDERINFO'
  };
} 