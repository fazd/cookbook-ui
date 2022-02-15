import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';



const RecipeList = (props) => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log('prop ', props.recipes);
    setRecipes(props.recipes);
    // console.log('recipes2', props.recipes);
    console.log('4');
  }, [])


  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Recipes</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {recipes?.map((rec) => (
            <div key={rec.id} className="group" >
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
    </div>
  );
};

RecipeList.propTypes = {
  recipes: propTypes.array.isRequired,
}



export default RecipeList;