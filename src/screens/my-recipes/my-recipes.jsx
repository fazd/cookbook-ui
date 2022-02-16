import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/recipe-list';
import { getOwnRecipes } from '../../services/recipe';

const MyRecipes = () => {

  const location = useLocation();

  const [recipes, setRecipes] = useState([]);
  const [metadata, setMetadata] = useState({});

  useEffect(async () => {
    const params = location.search;
    const { data, metadata: currMetadata } = await getOwnRecipes(params);
    setRecipes(data);
    setMetadata(currMetadata);

  }, [location]);


  return (
    <>
      {recipes?.length > 0 ? <RecipeList recipes={recipes} total={metadata.total} /> : <h1> Loading</h1>}
    </>
  );
}

export default MyRecipes;
