/* инфо о сделанном заказе */ 
import { GET_ORDER_REQUEST,
         GET_ORDER_SUCCESS,
         GET_ORDER_ERR } from '../actions/action-get-order';


const initialOrderState = {
  order: 0,
  orderRequest: false,
  orderFailed: false,
};

export const createdOrderReducer = (state=initialOrderState, action) => {
  switch(action.type){
    case GET_ORDER_REQUEST: {
      return {
       ...state,
       orderRequest: true,
       orderFailed: false,
       show: false
      };
    }
    
    case GET_ORDER_SUCCESS: {
       return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: action.order,
      };
    }

    case GET_ORDER_ERR: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};