import React, { useEffect, useState } from 'react';
import RecipeList from '../../components/recipe-list';
import { getAllRecipes } from '../../services/recipe';


const Home = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    const { data } = await getAllRecipes();
    setRecipes(data);
  }, []);


  return (
    <>
      {recipes?.length > 0 ? <RecipeList recipes={recipes} /> : <h1>loading</h1>}
    </>
  )
};

export default Home;