/* инфо о сделанном заказе */ 
import { GET_ORDER_REQUEST,
         GET_ORDER_SUCCESS,
         GET_ORDER_ERROR, 
         CLEAN_ORDER_NUMBER,
         TGetOrderActions } from '../actions/action-get-order';

type TinitialState = {
  order: null | number,
  orderRequest: boolean,
  orderFailed: boolean,
}

const initialOrderState: TinitialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

export const createdOrderReducer = (state = initialOrderState, action:TGetOrderActions):TinitialState => {
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
       order: null,
       orderRequest: false
      };
    }

    default: {
      return state;
    }
  }
};