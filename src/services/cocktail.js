import axios from 'axios';

const urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const getCocktailByName = async (nameCocktail) => {
    console.log(urlAPI + nameCocktail);
    const {data} = await axios.get(urlAPI + nameCocktail);
  
    return data.drinks;
  };
  
  export { getCocktailByName };