import { WS_AUTH_CONNECTION_INIT,
         WS_AUTH_CONNECTION_ERROR,
         WS_AUTH_CONNECTION_OPEN,
         WS_AUTH_CONNECTION_CLOSE,
         WS_AUTH_GET_DATA,
         WS_AUTH_SEND_DATA } from "../action-ws-types/action-ws-types";


export const wsAuthConnectionInit = () => {
  return {
    type: WS_AUTH_CONNECTION_INIT
  };
};

export const wsAuthConnectionError = () => {
  return {
    type: WS_AUTH_CONNECTION_ERROR
  };
};

export const wsAuthConnectionOpen = () => {
  return {
    type: WS_AUTH_CONNECTION_OPEN
  };
};

export const wsAuthConnectionClose = () => {
  return {
    type: WS_AUTH_CONNECTION_CLOSE
  };
};

export const wsAuthGetData = (data) => {
  return {
    type: WS_AUTH_GET_DATA,
    payload: data
  };
}; 

export const wsAuthSendData = (data) => {
  return {
    type: WS_AUTH_SEND_DATA,
    payload: data
  };
}; 



