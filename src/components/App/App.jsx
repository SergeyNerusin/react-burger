/* jshint esversion:6*/ 
import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Burgeringredients from '../Burgeringredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import checkResponse from '../../service/checkresponse'; 
import apiUrl  from '../../service/constant';

const App = () => {
 const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    const fetchDataIngradients = async () => {
        fetch(`${apiUrl}/api/ingredients`)
        .then(res => checkResponse(res))
        .then(data => setIngredients(data.data))
        .catch(error => console.error(error.message));
    };
    fetchDataIngradients(); 
  },[]); 
  
  return ingredients.length && ( 
    <>
      <AppHeader/>
       <main className="container mb-10">
          <Burgeringredients data={ingredients}/> 
          <BurgerConstructor data={ingredients}/>
       </main>
    </>
  );
}

export default App;