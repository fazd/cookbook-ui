import React, { useEffect, useState } from 'react';
import RecipeList from '../../components/recipe-list';
import { getAllRecipes } from '../../services/recipe';


const Home = () => {

  const [recipes, setRecipes] = useState(null);

  useEffect(async () => {
    const { data, metadata } = await getAllRecipes();
    setRecipes(data);
  }, []);


  return (
    <>
      {recipes?.length > 0 ? <RecipeList recipes={recipes} /> : null}
    </>
  )
};

export default Home;