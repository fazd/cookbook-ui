import axios from 'axios';
import config from '../config';

const recipeUrl = `${config.apiURL}/recipes`;
const headers = {Authorization: 'Bearer ' + localStorage.getItem('token')};

export const getOwnRecipes = async (params = '?') => {
  const response = await axios.get(`${recipeUrl}/${params}`,{ headers });
  return response.data;
}

export const getAllRecipes = async (params = '?') => {
  const response = await axios.get(`${recipeUrl}/all/${params}`, {});
  return response.data;
}

export const createNewRecipe = async (createRecipeData) => {
  const response = await axios.post(recipeUrl, createRecipeData, { headers });
  return response.data;
}

export const updateRecipe = async (updateRecipeData, id) => {
  const response = await axios.patch(`${recipeUrl}/${id}`, updateRecipeData, { headers });
  return response.data;
}

export const deleteRecipe = async (id) => {
  const response = await axios.delete(`${recipeUrl}/${id}`,{ headers});
  return response.data;
}

