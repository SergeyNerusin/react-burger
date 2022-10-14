/* jshint esversion:6*/ 
import React from 'react';
import AppHeader from '../app-header/app-header';
import Burgeringredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../burger-constructor/order-details/order-details';
import { apiGetOrderNumber } from '../../utils/burger-api';
import { useSelector, useDispatch } from 'react-redux';
import { getIngr } from '../../services/store/actions/action';

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
  
  const [showModalIngrDetails, setShowModalIngrDetails] = React.useState(false);
  const [itemData, setItemData] = React.useState({});
  const [showModalOrder, setShowModalOrder] = React.useState(false); 
  const [orderNumber, setOrderNumber] = React.useState(0);

  const handleItemData = (data) => {
    setItemData(data);
    setShowModalIngrDetails(state => !state);
  }; 

  const handleOrder = (ingredientsId) => {
    apiGetOrderNumber(ingredientsId)
    .then(data => { 
      if(data.success){ 
          setOrderNumber(data.order.number);
          setShowModalOrder(true);
      } else {
          setOrderNumber(0);
        }
    }) 
    .catch(error => console.error(error.message));
  };

 const handleCloseModalIng = () => {
  setShowModalIngrDetails(false);
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
          <Burgeringredients openModal={handleItemData}/>
          <BurgerConstructor openModal={handleOrder}/> 
        </main>
       <Modal onClose={handleCloseModalIng} 
              show={showModalIngrDetails} 
              title={"Детали инградиента"}>
              <IngredientDetails data={itemData}/>
      </Modal>
      <Modal onClose={handleCloseModalOrder} 
             show={showModalOrder}>
             <OrderDetails orderNumber={orderNumber}/>
      </Modal>
    </>
  );
}

export default App;
