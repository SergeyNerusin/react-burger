/* для получения детальной информации о заказанном бургере  */ 
import { GET_ORDERINFO_REQUEST, 
         GET_ORDERINFO_SUCCESS, 
         GET_ORDERINFO_ERRОR,
         CLEAN_ORDERINFO,
        TOrderInfoActions} from '../actions/action-order-info';
import { TOrder } from '../../../utils/type';

type TinitialState = {
  order: TOrder | null | undefined,
  orderInfoRequest: boolean,
  orderInfoError: boolean
}
const initialState: TinitialState = {
  order: null,
  orderInfoRequest: false,
  orderInfoError: false
};

export const orderInfoReducer = (state = initialState, action: TOrderInfoActions): TinitialState  => {
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
