import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import useModal from '../hooks/use-modal';
import Recipe from './recipe';



const RecipeList = (props) => {

  const [recipes, setRecipes] = useState([]);
  const [own, setOwn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setOwn(props.own ?? false);
    setRecipes(props.recipes);
  }, [])


  const handleMore = (rec) => {
    console.log('clicked', rec);
    setSelected(rec);
    setShowModal(true);
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
      </div>
      {showModal && selected ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {selected.title}
                  </h3>
                </div>
                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="object-contain group-hover:opacity-75"

                  />
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {selected.description}
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: propTypes.array.isRequired,
  own: propTypes.bool,
}



export default RecipeList;