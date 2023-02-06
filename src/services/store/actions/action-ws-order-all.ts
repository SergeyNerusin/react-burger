import { WS_CONNECTION_INIT,
         WS_CONNECTION_OPEN, 
         WS_CONNECTION_CLOSE, 
         WS_CONNECTION_ERROR, 
         WS_GET_DATA,
         WS_SEND_DATA } from '../action-ws-types/action-ws-types';



export const wsConnectionInit = () => {
  return {
    type: WS_CONNECTION_INIT
  };
}; 

export const wsConnectionOpen = () => {
  return {
    type: WS_CONNECTION_OPEN
  };
};  

export const wsConnectionClose = () => {
  return {
    type: WS_CONNECTION_CLOSE
  };
}; 

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR
  };
}; 

export const wsGetData = (data) => {
  return {
    type: WS_GET_DATA,
    payload: data
  };
}; 

export const wsSendData = (data) => {
  return {
    type: WS_SEND_DATA,
    payload: data
  };
}; 