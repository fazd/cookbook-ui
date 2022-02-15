import axios from "axios"
import config from "../config"
// import { useToken } from "../hooks/use-token";

const recipeUrl = `${config.apiURL}/recipes`;

// const { getToken } = useToken;

const headers = {Authorization: "Bearer " + localStorage.getItem('token')};

export const getOwnRecipes = async () => {
  const response = await axios.get(recipeUrl,{ headers });
  return response.data;
}

export const getAllRecipes = async () => {
  const response = await axios.get(`${recipeUrl}/all`, {});
  return response.data;
}

export const createNewRecipe = async (createRecipeData) => {
  const response = await axios.post(recipeUrl, createRecipeData, { headers });
  return response.data;
}

export const updateRecipe = async (updateRecipeData) => {
  const response = await axios.patch(recipeUrl, updateRecipeData, { headers });
  return response.data;
}

export const deleteRecipe = async () => {
  const response = await axios.delete(recipeUrl,{ headers});
  return response.data;
}

