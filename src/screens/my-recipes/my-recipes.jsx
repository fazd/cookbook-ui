import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/recipe-list';
import { getOwnRecipes } from '../../services/recipe';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from 'react-loader-spinner';

const MyRecipes = () => {

  const location = useLocation();
  const selector = useSelector(state => state.login.isLogged);
  const [recipes, setRecipes] = useState([]);
  const [metadata, setMetadata] = useState({});

  useEffect(async () => {
    const params = location.search;

    const { data, metadata: currMetadata } = await getOwnRecipes(params);
    setRecipes(data);
    setMetadata(currMetadata);
  }, [location, selector]);


  return (
    <>
      {recipes?.length > 0 ? <RecipeList recipes={recipes} total={metadata?.total || 0} /> : <TailSpin color="#00BFFF" height={80} width={80} />
      }
    </>
  );
}

export default MyRecipes;
