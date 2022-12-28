import {  //WS_CONNECTION_INIT,
          WS_CONNECTION_OPEN, // SUCCESS
          WS_CONNECTION_CLOSE, 
          WS_CONNECTION_ERROR, 
          WS_GET_DATA          
        } from '../action-ws-types/action-ws-types';

const initialStateOrderAll = {
  data: null,
  wsConnected: false,
  wsConnectedError: false
};        

export const wsOrderAllReducer = (state = initialStateOrderAll, action)=>{
  switch(action.type){
    case WS_CONNECTION_OPEN:
      return {
        ...state,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
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