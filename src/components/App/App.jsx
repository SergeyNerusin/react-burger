/* jshint esversion:6*/ 
import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Burgeringredients from '../Burgeringredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import checkResponse from '../../service/checkresponse';
import apiUrl  from '../../service/constant';
import IngredientDetails from '../Burgeringredients/IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';

const App = () => {
 const [ingredients, setIngredients] = React.useState([]);
 const [showModalIngrDetails, setShowModalIngrDetails] = React.useState(false);
 const [itemData, setItemData] = React.useState({});

const handleItemData = (data) =>{
  setItemData(data);
  setShowModalIngrDetails(state => !state);
}; 

 const handleOpenModalIng = () => {
  setShowModalIngrDetails(true);
 };

 const handleCloseModalIng = () => {
  setShowModalIngrDetails(false);
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
          <BurgerConstructor data={ingredients}/>
       </main>
       <Modal onClose={handleCloseModalIng} 
              show={showModalIngrDetails} 
              title={"Детали инградиента"}>
        <IngredientDetails data={itemData}/>
      </Modal>

    </>
  );
}

export default App;