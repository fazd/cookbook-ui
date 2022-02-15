import React, { useEffect, useState } from 'react';
import RecipeList from '../../components/recipe-list';
import { getOwnRecipes } from '../../services/recipe';

const MyRecipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    const { data, metadata } = await getOwnRecipes();
    console.log('recipe', data);
    setRecipes(data);
  }, []);


  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
}

export default MyRecipes;
