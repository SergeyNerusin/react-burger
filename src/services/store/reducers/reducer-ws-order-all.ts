import {  WS_CONNECTION_OPEN, 
          WS_CONNECTION_CLOSE, 
          WS_CONNECTION_ERROR, 
          WS_GET_DATA 
        } from '../action-ws-types/action-ws-types';

import { TWsOrderAllActions } from '../actions/action-ws-order-all';
import { TStats } from '../../../utils/type';

type TinitialStateOrderAll = {
  data: null | TStats;
  wsConnected: boolean;
  wsConnectedError: boolean;
}

const initialStateOrderAll: TinitialStateOrderAll = {
  data: null,
  wsConnected: false,
  wsConnectedError: false
};        

export const wsOrdersAllReducer = (state = initialStateOrderAll, action: TWsOrderAllActions):TinitialStateOrderAll => {
  switch(action.type){
    case WS_CONNECTION_OPEN:
      return {
        ...state,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        wsConnectedError: true,
      };

    case WS_CONNECTION_CLOSE:
      return {
        ...state,
        wsConnected: false,
        wsConnectedError: false,
      };

    case WS_GET_DATA:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;  
  }
};       