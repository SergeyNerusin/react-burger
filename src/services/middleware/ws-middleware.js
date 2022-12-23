import { getCookie } from "../../utils/cookie"; 

export const wsMiddleware = (wsUrl, wsActions, isAuth) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onError, onOpen, onClose, onMessage, wsSendMessage } = wsActions;
      const accessToken = getCookie('token');

      if (type === wsInit && isAuth) {
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
      } else if (type === wsInit && !isAuth) {
        socket = new WebSocket(wsUrl);
        // console.log('Попали сюда - isAuth = false');
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
          // console.log('wsMiddleware restParsedData:', restParsedData); 
          dispatch({ type: onMessage, payload: restParsedData });
        };

        if (type === wsSendMessage) {
          const data = { ...payload, token: accessToken };
          socket.send(JSON.stringify(data));
        }
      }

      next(action);
    };
  };
};