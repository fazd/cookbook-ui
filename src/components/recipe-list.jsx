import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { deleteRecipe } from '../services/recipe';
import { ToastContainer } from 'react-toastify';
import { errorNotify, successNotify } from './alert';
import { useHistory } from 'react-router-dom';
import Pagination from './pagination';


const RecipeList = (props) => {
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const selector = useSelector(state => state.login.user);

  useEffect(() => {
    setRecipes(props.recipes);
  }, [])


  const handleMore = (rec) => {
    setSelected(rec);
    setShowModal(true);
  }

  const isOwn = (author) => {
    const user = selector;
    return user?.id === author;
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

  const handleUpdate = async (element) => {
    history.push({ pathname: '/update-recipe', state: { recipe: element } })
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Recipes</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {recipes?.map((rec) => (
            <div key={rec.id} onClick={() => handleMore(rec)} className="group" >
              <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={rec.image}
                  alt={rec.imageAlt}
                  className="object-contain group-hover:opacity-75"

                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-700">{rec.title}</h3>
            </div>
          ))}
        </div>
        <Pagination total={props.total} />
      </div>

      {showModal && selected ? (
        <>
          <div
            className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-50 my-6 min-w-xl  mx-auto max-w-xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold justify-center">
                    {selected.title}
                  </h3>
                </div>
                <div className="w-full mt-4 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-5 xl:aspect-h-4">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="rounded-t-lg object-contain h-48 w-50"
                  />
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500  leading-relaxed">
                    {selected.description}
                  </p>
                </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {isOwn(selected.author) ?
                    <div className=''>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleUpdate(selected)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleDelete(selected)}
                      >
                        Delete
                      </button>

                    </div>
                    : <></>}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
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