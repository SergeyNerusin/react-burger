import React, { useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../burger-constructor/order-details/order-details';

import { useSelector, useDispatch } from 'react-redux';
import { getIngr } from '../../services/store/actions/action-get-ingr';
import { getOreder } from '../../services/store/actions/action-get-order';
import { cleanOrder } from '../../services/store/actions/action-get-order';
import { cleanBurgerConctrutor } from '../../services/store/actions/action-constructor-ingr';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd/dist/core';

import { Switch, Route, useLocation, useHistory} from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import { tokenRefresh, getDataUser } from '../../services/store/actions/action-user-auth';

import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ProfilePage from '../../pages/profile/profile';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import NotFound from '../../pages/not-found-404/not-found';
import ProtectedRoute from '../protected-route/protected-route';
import Feed from '../../pages/feed/feed';
import { OrderInfo } from '../ordrer-info/order-info';


const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  
  const background = location.state?.background; 

  const {bun, ingredients} = useSelector(store => store.burgerConstructor);
 
  
  const {data} = useSelector(store => store.ingredients);
  const {order, orderRequest} = useSelector(store => store.order);
  
  const refreshToken = localStorage.getItem('refreshToken');
  const cookie = getCookie('token');
  
  const handleOrder = () => {
    if (cookie && refreshToken){
      dispatch(getOreder([bun._id, ...ingredients.map(ingr => ingr._id), bun._id]));
    } else {
        history.push('/login');
    }
  };

  const handleCloseModalIng = () => {
        history.replace({ pathname: '/' });
  };

  const handleCloseModalOrderInfo = () => {
        history.goBack();
  };

  const handleCloseModalOrder = () => {
   dispatch(cleanOrder());
   dispatch(cleanBurgerConctrutor());
  };

  useEffect(() => {
    dispatch(getIngr());  //получаем ингредиенты 
  }, [dispatch]); 

  useEffect(() =>{
    if (!cookie && refreshToken) {
      dispatch(tokenRefresh());
    }
    if (cookie && refreshToken) {
      dispatch(getDataUser());
    }
   },[dispatch, cookie, refreshToken]);


  return !!data && (
    <>
      <AppHeader/>
      <div className={styles.wrapper}>
        <Switch location={ background || location }>
            <Route path='/' exact={true}>
              <DndProvider backend={HTML5Backend}>
                <main className={styles.container + ' mb-10'}>
                  <BurgerIngredients/> 
                  <BurgerConstructor openModal={handleOrder}/> 
                </main>
              </DndProvider>  
            </Route>
            <Route path='/login' exact={true}>
              <LoginPage/>
            </Route>
            <Route path='/register' exact={true}>
              <RegisterPage/>
            </Route>
            <Route path='/forgot-password' exact={true}>
              <ForgotPasswordPage/> 
            </Route>
            <Route path='/reset-password' exact={true}>
              <ResetPasswordPage/>
            </Route>
            <ProtectedRoute path='/profile'>
              <ProfilePage/>
            </ProtectedRoute>
            <Route path='/ingredients/:id' exact={true}>
              <IngredientDetails/>
            </Route>
            <Route path='/feed' exact={true}>
              <Feed/>
            </Route>
            <Route path='/feed/:id' exact={true}>
              <OrderInfo/>
            </Route>
            <ProtectedRoute path='/profile'>
              <ProfilePage/>
            </ProtectedRoute>
            <ProtectedRoute path='/profile/orders/:id'>
              <OrderInfo/>
            </ProtectedRoute>
            <Route path='*'>
              <NotFound/>
            </Route>
        </Switch>
      </div>
      { !!background && 
        <Route path='/ingredients/:id' exact={true}> 
          <Modal onClose={handleCloseModalIng} 
                title={'Детали инградиента'}>
                <IngredientDetails/>
          </Modal>
        </Route> }
      { !!background && 
        <Route path='/feed/:id' exact={true}> 
          <Modal onClose={handleCloseModalOrderInfo}>
                <OrderInfo/>
          </Modal>
        </Route> }  
      { orderRequest && 
        <Modal onClose={handleCloseModalOrder}>
              <OrderDetails orderNumber={order}/>
        </Modal> }
    </>
  );
}

export default App;

