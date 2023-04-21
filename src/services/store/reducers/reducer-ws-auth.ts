import { WS_AUTH_CONNECTION_OPEN,  
         WS_AUTH_CONNECTION_CLOSE,
         WS_AUTH_CONNECTION_ERROR,
         WS_AUTH_GET_DATA } from "../action-ws-types/action-ws-types"; 
import { TWsAuthActions } from "../actions/action-ws-auth";
import { TStats } from "../../../utils/type";    

type TInitialOrdersUser = {
  data: null | TStats;
  wsAuthConnected: boolean,
  wsAuthConnectedError: boolean,
  wsAuthLoadingData: boolean
}

const initialOrdersUser: TInitialOrdersUser = {
  data: null,
  wsAuthConnected: false,
  wsAuthConnectedError: false,
  wsAuthLoadingData: false
}        

export const wsAuthOrdersUserReducer = (state = initialOrdersUser, action: TWsAuthActions):TInitialOrdersUser => {
  switch(action.type){
    case WS_AUTH_CONNECTION_OPEN:
      return {
        ...state,
        wsAuthConnected: true,
        wsAuthLoadingData: true,
      };

    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        wsAuthConnected: false,
        wsAuthConnectedError: true,
      };

    case WS_AUTH_CONNECTION_CLOSE:
      return {
        ...state,
        wsAuthConnected: false,
        wsAuthConnectedError: false,
      };

    case WS_AUTH_GET_DATA:
      return {
        ...state,
        data: action.payload,
        wsAuthLoadingData: false,
      };

    default:
      return state;  
  }
};