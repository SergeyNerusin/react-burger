import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../burger-constructor/order-details/order-details';

import { useSelector, useDispatch } from 'react-redux';
import { getIngr } from '../../services/store/actions/action-get-ingr';
import { getOreder } from '../../services/store/actions/action-get-order';
import { delIngrDetails } from '../../services/store/actions/action-show-ingr-details';
import { cleanOrder } from '../../services/store/actions/action-get-order';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd/dist/core';

import { Switch, Route, useLocation} from 'react-router-dom';
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ProfilePage from '../../pages/profile/profile';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import NotFound from '../../pages/not-found-404/not-found';

const App = () => {
  
  const {ingredients} = useSelector(store => store.burgerConstructor);
  const {bun} = useSelector(store => store.burgerConstructor);
  const dispatch = useDispatch();
  
  const {data} = useSelector(store => store.ingredients);
  const showModalIngrDetails = useSelector(store => store.ingredientInfo.ingredient); 
  const showOrderNumber = useSelector(store => store.order.order);
  
  const location = useLocation();
  
  const handleOrder = () => {
    dispatch(getOreder([bun._id, ...ingredients.map(ingr => ingr._id), bun._id]));
  };

 const handleCloseModalIng = () => {
    dispatch(delIngrDetails());
   
 };

 const handleCloseModalOrder = () => {
   dispatch(cleanOrder());
};

  React.useEffect(() => {
    dispatch(getIngr());  //получаем ингредиенты 
  },[dispatch]); 

  return !!data && (
    <>
      <AppHeader/>
      <div className='page'>
        <Switch location={location}>
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
          <Route path='/profile' exact={true}>
            <ProfilePage/>
          </Route>
          <Route path='/' exact={true}>
            <DndProvider backend={HTML5Backend}>
              <main className='container mb-10'>
                <BurgerIngredients/> 
                <BurgerConstructor openModal={handleOrder}/> 
              </main>
            </DndProvider>  
            { !!showModalIngrDetails && 
            <Modal onClose={handleCloseModalIng} 
                  title={'Детали инградиента'}>
                  <IngredientDetails/>
            </Modal> }
            { !!showOrderNumber && 
            <Modal onClose={handleCloseModalOrder}>
                <OrderDetails orderNumber={showOrderNumber}/>
            </Modal> }
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

