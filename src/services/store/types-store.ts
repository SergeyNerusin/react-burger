import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "./store"; 
import { TConstructorBurgerActions } from "./actions/action-constructor-ingr";
import { TBurgerIngredientsActions } from "./actions/action-get-ingr";
import { TGetOrderActions } from "./actions/action-get-order";
import { TOrderInfoActions } from "./actions/action-order-info";
import { TUserAuthActions } from "./actions/action-user-auth";
import { TwsActions, TwsAuthActions } 


type TApplicationActions =
TBurgerIngredientsActions 
| TConstructorBurgerActions
| TGetOrderActions
| TOrderInfoActions 
| TUserAuthActions
| TwsActions
| TwsAuthActions


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>; 
