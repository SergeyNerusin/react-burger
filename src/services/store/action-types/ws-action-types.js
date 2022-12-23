// для всех заказов 
export const WS_CONNECTION_INIT = 'WS_CONNECTION_INIT';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_OPEN = 'WS_CONNECTION_OPEN';
export const WS_CONNECTION_CLOSE = 'WS_CONNECTION_CLOSE';
export const WS_GET_DATA = 'WS_GET_DATA';
export const WS_SEND_DATA = 'WS_SEND_DATA';

// для заказов авторизованного пользователя
export const WS_AUTH_CONNECTION_INIT = 'WS_AUTH_CONNECTION_INIT';
export const WS_AUTH_CONNECTION_ERROR = 'WS_AUTH_CONNECTION_ERROR';
export const WS_AUTH_CONNECTION_OPEN = 'WS_AUTH_CONNECTION_OPEN';
export const WS_AUTH_CONNECTION_CLOSE = 'WS_AUTH_CONNECTION_CLOSED';
export const WS_AUTH_GET_DATA = 'WS_AUTH_GET_DATA';
export const WS_AUTH_SEND_DATA = 'WS_AUTH_SEND_DATA';


export const wsActions = {
	wsInit: WS_CONNECTION_INIT,
	wsSendMessage: WS_SEND_DATA,
	onOpen: WS_CONNECTION_OPEN,
	onError: WS_CONNECTION_ERROR,
	onClose: WS_CONNECTION_CLOSE,
	onMessage: WS_GET_DATA,
};

export const wsAuthActions = {
	wsInit: WS_AUTH_CONNECTION_INIT,
	onError: WS_AUTH_CONNECTION_ERROR,
	onOpen: WS_AUTH_CONNECTION_OPEN,
	onClose: WS_AUTH_CONNECTION_CLOSE,
	onMessage: WS_AUTH_GET_DATA,
	wsSendMessage: WS_AUTH_SEND_DATA,
};

