import { TStats } from '../../../utils/type';
import { WS_CONNECTION_INIT,
         WS_CONNECTION_OPEN, 
         WS_CONNECTION_CLOSE, 
         WS_CONNECTION_ERROR, 
         WS_GET_DATA,
         WS_SEND_DATA } from '../action-ws-types/action-ws-types';

interface IwsConnectionInit {
	readonly type: typeof WS_CONNECTION_INIT;
}

interface IwsConnectionOpen {
	readonly type: typeof WS_CONNECTION_OPEN;
}

interface IwsConnectionClose {
	readonly type: typeof WS_CONNECTION_CLOSE;
}

interface IwsConnectionError {
	readonly type: typeof WS_CONNECTION_ERROR;
}

interface IwsGetData {
	readonly type: typeof WS_GET_DATA;
	payload: TStats;
}

interface IWsSendData {
	readonly type: typeof WS_SEND_DATA;
	payload: TStats;
}

export type TWsOrderAllActions =
IwsConnectionInit
| IwsConnectionOpen
| IwsConnectionClose
| IwsConnectionError
| IwsGetData
| IWsSendData

export const wsConnectionInit = ():IwsConnectionInit => {
  return {
    type: WS_CONNECTION_INIT
  };
}; 

export const wsConnectionOpen = ():IwsConnectionOpen => {
  return {
    type: WS_CONNECTION_OPEN
  };
};  

export const wsConnectionClose = ():IwsConnectionClose => {
  return {
    type: WS_CONNECTION_CLOSE
  };
}; 

export const wsConnectionError = ():IwsConnectionError => {
  return {
    type: WS_CONNECTION_ERROR
  };
}; 

export const wsGetData = (data:TStats):IwsGetData => {
  return {
    type: WS_GET_DATA,
    payload: data
  };
}; 

// эта функция в данный момент не задействована,
// вебсокет используется только для приёма данных с сервера
export const wsSendData = (data:TStats):IWsSendData => {
  return {
    type: WS_SEND_DATA,
    payload: data
  };
}; 