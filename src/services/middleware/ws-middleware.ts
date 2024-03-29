import { getCookie } from "../../utils/cookie"; 
import { Middleware, MiddlewareAPI } from "redux";
import { TWsMiddlewareActions } from "../store/action-ws-types/action-ws-types";
 
export const wsMiddleware = (wsUrl: string, wsActions:TWsMiddlewareActions, isAuth: boolean): Middleware => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket| null = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onError, onOpen, onClose, onMessage, wsSendMessage } = wsActions;
      const accessToken = getCookie('token');

      if (type === wsInit && isAuth) {
          socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
      } else if (type === wsInit && !isAuth) {
          socket = new WebSocket(wsUrl);
        }
      
      if (socket) {
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };
        
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          
          dispatch({ type: onMessage, payload: restParsedData });
        };

        if (type === wsSendMessage) {
          const data = { ...payload };
          socket.send(JSON.stringify(data));
        }
      }

      next(action);
    };
  };
};