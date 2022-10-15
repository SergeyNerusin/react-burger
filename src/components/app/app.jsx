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

/*
  Создание первых экшенов и редьюсеров
  Когда хранилище создано и инициализировано, время наполнить его бизнес-логикой приложения. Опишите экшены и редьюсеры для следующей функциональности:
  Получение списка ингредиентов от API. Используется в компоненте BurgerIngredients.

  Получение списка ингредиентов для конструктора бургера. Используется в компоненте BurgerConstructor.

  Добавление данных о просматриваемом в модальном окне IngredientDetails ингредиенте.
  Удаление данных о просматриваемом в модальном окне ингредиенте при закрытии модального окна.

  Получение и обновление номера заказа в модальном окне OrderDetails.
  
  Все действия, которые сопровождаются запросами к API или зависят от них, должны проходить через усилители. Не забудьте подключить усилитель к вашему хранилищу.
*/ 

const App = () => {
  const ingredients = useSelector(store => store.ingredients.data);
  const dispatch = useDispatch();
  
  const showModalIngrDetails = useSelector(store => store.ingredientInfo.active); 

  const [showModalOrder, setShowModalOrder] = React.useState(false);
  const show = useSelector(store => !store.order.orderRequest); 
  
  const handleOrder = (ingredientsId) => {
    dispatch(getOreder(ingredientsId));
    setShowModalOrder(show);
  };

 const handleCloseModalIng = () => {
    dispatch(delIngrDetails()); 
 };

 const handleCloseModalOrder = () => {
   setShowModalOrder(false);
};

  React.useEffect(() => {
    dispatch(getIngr());
  },[dispatch]); 
  
  return (ingredients.length > 0) && ( 
    <>
      <AppHeader/>
        <main className="container mb-10">
          <Burgeringredients/> 
          <BurgerConstructor openModal={handleOrder}/> 
        </main>
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
