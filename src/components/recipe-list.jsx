import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { deleteRecipe } from '../services/recipe';
import { errorNotify, successNotify } from './alert';
import Pagination from './pagination';
import Modal from './modal';


const RecipeList = (props) => {

  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setRecipes(props.recipes);
  }, [])


  const handleMore = (rec) => {
    setSelected(rec);
    setShowModal(true);
  }


  const handleDelete = async (element) => {
    try {
      await deleteRecipe(element.id);
      setSelected(null);
      setShowModal(false);
      const copyRecipes = [...recipes];
      const found = copyRecipes.findIndex((el) => el.id === element.id);
      copyRecipes.splice(found, 1);
      setRecipes(copyRecipes);
      successNotify('Recipe deleted successfully.', 1000);
    } catch (error) {
      errorNotify('There was an error deleting your recipe');
    }
  }

  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Recipes</h2>

        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {recipes?.map((rec) => (
            <div key={rec.id} onClick={() => handleMore(rec)} className='group' >
              <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                <img
                  src={rec.image}
                  alt={rec.imageAlt}
                  className='object-contain group-hover:opacity-75'

                />
              </div>
              <h3 className='mt-4 text-sm font-medium text-gray-700'>{rec.title}</h3>
            </div>
          ))}
        </div>
        <Pagination total={props.total ?? 0} />
      </div>

      {showModal && selected ? (
        <Modal selected={selected} hideModal={() => setShowModal(false)} deleteRecipe={(element) => handleDelete(element)} />
      ) : <></>
      }
      <ToastContainer />
    </div >
  );
};

RecipeList.propTypes = {
  recipes: propTypes.array.isRequired,
  total: propTypes.number,
}



export default RecipeList;