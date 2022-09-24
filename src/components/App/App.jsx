/* jshint esversion:6*/ 
import React from 'react';
import AppHeader from '../app-header/app-header';
import Burgeringredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import checkResponse from '../../services/checkresponse';
import apiUrl  from '../../services/constant';
import IngredientDetails from '../burger-ingredients/IngredientDetails/IngredientDetails';
import Modal from '../modal/modal';
import OrderDetails from '../burger-constructor/order-details/order-details';
import { BurgerConstructorContext } from '../../services/burger-constr-context';


const App = () => {

  const [ingredients, setIngredients] = React.useState([]);
  const [showModalIngrDetails, setShowModalIngrDetails] = React.useState(false);
  const [itemData, setItemData] = React.useState({});
  const [showModalOrder, setShowModalOrder] = React.useState(false); 
  const [orderNumber, setOrderNumber] = React.useState(0);
  const handleItemData = (data) =>{
    setItemData(data);
    setShowModalIngrDetails(state => !state);
  }; 

  const handleOrder = (ingredientsId) => {
    fetch(`${apiUrl}/api/orders`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ingredients: ingredientsId})
   })
    .then(res => checkResponse(res))
    .then(data => data.success ? setOrderNumber(data.order.number) : setOrderNumber(0))
    .catch(error => console.error(error.message));
    setShowModalOrder(true);
  };

 const handleCloseModalIng = () => {
  setShowModalIngrDetails(false);
 };

 const handleCloseModalOrder = () => {
  setShowModalOrder(false);
 };

  React.useEffect(() => {
    const fetchDataIngradients = async () => {
        fetch(`${apiUrl}/api/ingredients`)
        .then(res => checkResponse(res))
        .then(res => setIngredients(res.data))
        .catch(error => console.error(error.message));
    };
    fetchDataIngradients(); 
  },[]); 
  
  return (ingredients.length > 0) && ( 
    <>
      <AppHeader/>
       <main className="container mb-10">
          <Burgeringredients data={ingredients} openModal={handleItemData}/> 
          <BurgerConstructorContext.Provider value={ingredients}>
            <BurgerConstructor openModal={handleOrder}/>
          </BurgerConstructorContext.Provider>
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