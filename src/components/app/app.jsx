/* jshint esversion:6*/ 
import React from 'react';
import AppHeader from '../app-header/app-header';
import Burgeringredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../burger-constructor/order-details/order-details';

import { useSelector, useDispatch } from 'react-redux';
import { getIngr, delIngrDetails } from '../../services/store/actions/action';
import { getOreder } from '../../services/store/actions/action';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd/dist/core';

const App = () => {

  const {ingredients} = useSelector(store => store.burger);
  const {bun} = useSelector(store => store.burger);
  const dispatch = useDispatch();
 
  const showModalIngrDetails = useSelector(store => store.ingredientInfo.active); 

  const [showModalOrder, setShowModalOrder] = React.useState(false);
  
  
  const handleOrder = () => {
    dispatch(getOreder([bun._id, ...ingredients.map(ingr => ingr._id), bun._id]));
    setShowModalOrder(true);
  };

 const handleCloseModalIng = () => {
    dispatch(delIngrDetails());
   
 };

 const handleCloseModalOrder = () => {
   setShowModalOrder(false);
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
        <Modal onClose={handleCloseModalIng} 
              show={showModalIngrDetails} 
              title={"Детали инградиента"}>
              <IngredientDetails/>
        </Modal>
        <Modal onClose={handleCloseModalOrder} 
             show={showModalOrder}>
             <OrderDetails/>
        </Modal>
    </>
  );
}

export default App;
