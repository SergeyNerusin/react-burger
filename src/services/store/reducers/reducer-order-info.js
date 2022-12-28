/* для получения детальной информации о заказанном бургере  */ 
import { GET_ORDERINFO_REQUEST, 
         GET_ORDERINFO_SUCCESS, 
         GET_ORDERINFO_ERRОR,
         CLEAN_ORDERINFO} from '../actions/action-order-info';

const initialState = {
  order: null,
  orderInfoRequest: false,
  orderInfoError: false
};

export const orderInfoReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ORDERINFO_REQUEST: 
      return {
        ...state,
        orderInfoRequest: true
      };
    case GET_ORDERINFO_SUCCESS:
      return {
        ...state,
        order: action.payload,
      };
    case GET_ORDERINFO_ERRОR: 
      return {
        ...state,
        orderInfoRequest: false,
        orderInfoError: true
      };
    
      case CLEAN_ORDERINFO:
        return {
          ...state, 
          order: null,
          orderInfoRequest: false,
          orderInfoError: false
        };

    default: 
      return state;
  }
};
