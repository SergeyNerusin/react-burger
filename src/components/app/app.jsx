import React from 'react';
import AppHeader from '../app-header/app-header';
import Burgeringredients from '../burger-ingredients/burger-ingredients';
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

const App = () => {

  const {ingredients} = useSelector(store => store.burgerConstructor);
  const {bun} = useSelector(store => store.burgerConstructor);
  const dispatch = useDispatch();
 
  const showModalIngrDetails = useSelector(store => store.ingredientInfo.active); 
  
  const showOrderNumber = useSelector(store => store.order.order);
  
  
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
  
  return (
    <>
      <AppHeader/>
        <DndProvider backend={HTML5Backend}>
          <main className="container mb-10">
            <Burgeringredients/> 
            <BurgerConstructor openModal={handleOrder}/> 
          </main>
        </DndProvider>  
        { showModalIngrDetails && 
        <Modal onClose={handleCloseModalIng} 
               title={"Детали инградиента"}>
              <IngredientDetails/>
        </Modal> }
        { !!showOrderNumber && 
        <Modal onClose={handleCloseModalOrder}>
             <OrderDetails/>
        </Modal> }
    </>
  );
}

export default App;

