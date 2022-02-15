import React from 'react';
import propTypes from 'prop-types';


const Recipe = (props) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">title </h5>
          <p className="text-gray-700 text-base mb-4">
            description
          </p>
          <button type="button" className=" inline-block px-6 mr-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
          <button type="button" className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
        </div>
      </div>
    </div>
  )
}

Recipe.propTypes = {
  // title: propTypes.string.isRequired,
  // description: propTypes.string.isRequired,
}


export default Recipe;