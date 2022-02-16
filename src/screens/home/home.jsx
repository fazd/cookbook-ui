import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/recipe-list';
import { getAllRecipes } from '../../services/recipe';


const Home = () => {

  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [metadata, setMetadata] = useState({});

  useEffect(async () => {
    const params = location.search;
    const { data, metadata: currMetadata } = await getAllRecipes(params);
    setRecipes(data);
    setMetadata(currMetadata);

  }, [location]);


  return (
    <>
      {recipes?.length > 0 ? <RecipeList recipes={recipes} total={metadata.total} /> : <h1>loading</h1>}
    </>
  )
};

export default Home;