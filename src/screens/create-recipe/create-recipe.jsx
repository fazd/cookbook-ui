import React, { useEffect, useState } from 'react';
import { createNewRecipe, } from '../../services/recipe';
import toBase64 from '../../utils';
const CreateRecipe = () => {

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitForm = async (event) => {
    const form = event.target.form;
    console.log('form', form);
    console.log('title', title);
    console.log('description', description);
    if (image !== null) {
      console.log('allow to do that', image);
      const response = await createNewRecipe({ title, description, image });
      console.log('response', response);
    }
  }

  const handleImage = async (event) => {
    const file = event.target.files[0];
    console.log('file', file);
    if (file.size > 50000) {
      console.log('error max file passed');
      setImage(null);
    }
    else {
      console.log('file', file);
      // const blobFile = URL.createObjectURL(file);
      const elem = await toBase64(file);
      setImage(elem);
    }
    // console.log('file', elem);
  }


  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-8 lg:px-10'>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-5 text-center">Create new Recipe</h3>
              <div className="grid grid-cols-5 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="given-name"
                      placeholder="recipe"
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Description of your recipe"
                    defaultValue={''}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Recipe photo</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {image ? null : <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>}
                    {image ? <img className="rounded-t-lg object-contain h-48 w-96" src={image} alt="" /> : null}
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="image" onChange={handleImage} accept=".jpg,.jpeg,.png" name="image" type="file" className="sr-only" />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG up to 50KB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="button"
                onClick={submitForm}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;