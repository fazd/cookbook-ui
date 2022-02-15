import React, { useEffect, useState } from 'react';
import RecipeList from '../../components/recipe-list';
import { getOwnRecipes } from '../../services/recipe';

const MyRecipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    const { data } = await getOwnRecipes();
    console.log('recipe', data);
    setRecipes(data);
  }, []);


  return (
    <>
      {recipes?.length > 0 ? <RecipeList recipes={recipes} own={true} /> : <h1> Loading</h1>}
    </>
  );
}

export default MyRecipes;
