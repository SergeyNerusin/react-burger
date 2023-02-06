import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { wsMiddleware } from '../middleware/ws-middleware';
import { WSS_URL, WS_URL } from '../../utils/constant';
import { wsActions, wsAuthActions } from './action-ws-types/action-ws-types';


const wsUrl = `${WSS_URL}${WS_URL.ORDERS_ALL}`;
const wsAuthUrl = `${WSS_URL}${WS_URL.ORDERS}`;

// https://stackoverflow.com/questions/52800877/error-with-redux-devtools-extension-using-ts-property-redux-devtools-extens

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk,
  wsMiddleware(wsUrl, wsActions, false),
  wsMiddleware(wsAuthUrl, wsAuthActions, true)));

export const store = createStore(rootReducer, enhancer);