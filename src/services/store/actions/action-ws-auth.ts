import { WS_AUTH_CONNECTION_INIT,
         WS_AUTH_CONNECTION_ERROR,
         WS_AUTH_CONNECTION_OPEN,
         WS_AUTH_CONNECTION_CLOSE,
         WS_AUTH_GET_DATA,
         WS_AUTH_SEND_DATA } from "../action-ws-types/action-ws-types";
import { TStats } from "../../../utils/type";

interface IWsAuthConnectionInit {
  readonly type: typeof WS_AUTH_CONNECTION_INIT;
}

interface IWsAuthConnectionError {
  readonly type: typeof WS_AUTH_CONNECTION_ERROR;
}  

interface IWsAuthConnectionOpen {
  readonly type: typeof WS_AUTH_CONNECTION_OPEN;
} 

interface IWsAuthConnectionClose {
  readonly type: typeof WS_AUTH_CONNECTION_CLOSE;
} 

interface IWsAuthGetData {
  readonly type: typeof WS_AUTH_GET_DATA;
  payload: TStats;
} 

interface IWsAuthSendData  {
  readonly type: typeof WS_AUTH_SEND_DATA;
  payload: TStats;
} 

export type TWsAuthActions =
IWsAuthConnectionInit
| IWsAuthConnectionError
| IWsAuthConnectionOpen
| IWsAuthConnectionClose
| IWsAuthGetData
| IWsAuthSendData 

export const wsAuthConnectionInit = ():IWsAuthConnectionInit => {
  return {
    type: WS_AUTH_CONNECTION_INIT
  };
};

export const wsAuthConnectionError = ():IWsAuthConnectionError => {
  return {
    type: WS_AUTH_CONNECTION_ERROR
  };
};

export const wsAuthConnectionOpen = ():IWsAuthConnectionOpen => {
  return {
    type: WS_AUTH_CONNECTION_OPEN
  };
};

export const wsAuthConnectionClose = ():IWsAuthConnectionClose => {
  return {
    type: WS_AUTH_CONNECTION_CLOSE
  };
};

export const wsAuthGetData = (data:TStats):IWsAuthGetData => {
  return {
    type: WS_AUTH_GET_DATA,
    payload: data
  };
}; 

// эта функция в данный момент не задействована,
// вебсокет используется только для приёма данных с сервера
export const wsAuthSendData = (data:TStats) => {
  return {
    type: WS_AUTH_SEND_DATA,
    payload: data
  };
}; 



