/* инфо о сделанном заказе */ 
import { GET_ORDER_REQUEST,
         GET_ORDER_SUCCESS,
         GET_ORDER_ERROR, 
         CLEAN_ORDER_NUMBER } from '../actions/action-get-order';


const initialOrderState = {
  order: 0,
  orderRequest: false,
  orderFailed: false,
};

export const createdOrderReducer = (state = initialOrderState, action) => {
  switch(action.type){
    case GET_ORDER_REQUEST: {
      return {
       ...state,
       orderRequest: true,
      };
    }
    
    case GET_ORDER_SUCCESS: {
       return {
        ...state,
        order: action.order,
      };
    }

    case GET_ORDER_ERROR: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }

    case CLEAN_ORDER_NUMBER: {
      return {
       ...state,
       order: 0,
       orderRequest: false
      };
    }

    default: {
      return state;
    }
  }
};