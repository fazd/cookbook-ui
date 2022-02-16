import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Modal = (props) => {

  const history = useHistory();

  const [selected, setSelected] = useState(null);
  const selector = useSelector(state => state.login.user);

  useEffect(() => {
    setSelected(props.selected);
  }, [selected]);


  const isOwn = (author) => {
    const user = selector;
    return user?.id === author;
  }

  const hideModal = () => {
    props.hideModal();
  }

  const handleDelete = async (element) => {
    props.hideModal();
    props.deleteRecipe(element);
  }

  const handleUpdate = async (element) => {
    history.push({ pathname: '/update-recipe', state: { recipe: element } })
  }

  return (
    <>
      {selected ? <> <div
        className='justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
      >
        <div className='relative my-6 w-50 min-w-xl  mx-auto max-w-xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-96	 bg-white outline-none focus:outline-none'>
            <div className='flex justify-center p-5 border-b border-solid border-blueGray-200 rounded-t'>
              <h3 className='text-3xl font-bold justify-center'>
                {selected.title}
              </h3>
            </div>
            <div className='w-full mt-4 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-5 xl:aspect-h-4'>
              <img
                src={selected.image}
                alt={selected.title}
                className='rounded-t-lg object-contain h-48 w-50'
              />
            </div>
            <div className='relative p-6 flex-auto'>
              <p className='my-4 text-blueGray-500  leading-relaxed'>
                {selected.description}
              </p>
            </div>
            <div className='flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b'>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => hideModal(false)}
              >
                Close
              </button>
              {isOwn(selected.author) ?
                <div className=''>
                  <button
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => handleUpdate(selected)}
                  >
                    Edit
                  </button>
                  <button
                    className='bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
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
        <div className='opacity-25 fixed inset-0 z-40 bg-black'></div> </> : <h1>Loading </h1>}
    </>
  )
};

Modal.propTypes = {
  selected: propTypes.object,
  hideModal: propTypes.func,
  deleteRecipe: propTypes.func,
}

export default Modal;